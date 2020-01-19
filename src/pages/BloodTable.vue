<template>
    <div id="app">
        <p>hello world</p>
        <div id="mountNode" />
    </div>
</template>

<script>
    import G6 from '@antv/g6';

    export default {
        mounted() {
            this.initG6()
        },
        methods: {
            initG6() {
                const data = {
                    "id": "Modeling Methods",
                    "children": [{
                        "id": "Classification",
                        "children": [
                            { "id": "Logistic regression" },
                            { "id": "Linear discriminant analysis" }
                        ]},
                        {
                            "id": "Consensus",
                            "children": [{
                                "id": "Models diversity",
                                "children": [
                                    { "id": "Different initializations" }
                                ]}
                            ]}
                    ]};
                const graph = new G6.TreeGraph({
                    container: "mountNode",
                    width: 1000,
                    height: 600,
                    pixelRatio: 2,
                    modes: {
                        default: [
                            {
                                type: "collapse-expand",
                                onChange: function onChange() {
                                    return true;
                                }
                            },
                            "drag-canvas",
                            "zoom-canvas",
                            'double-finger-drag-canvas', 'three-finger-drag-canvas', {
                                type: 'tooltip',
                                formatText: function formatText() {
                                    return '<div style="background: red">' + '123'+'<b>'+'22222'+ '</b>' + '</div>';
                                }
                            },
                        ],
                    },
                    defaultNode: {
                        size: 26,
                        anchorPoints: [[0, 0.5], [1, 0.5]],
                        style: {
                            fill: "#C6E5FF",
                            stroke: "#5B8FF9"
                        }
                    },
                    defaultEdge: {
                        shape: "cubic-horizontal",
                        style: {
                            stroke: "#A3B1BF"
                        }
                    },
                    layout: {
                        type: "compactBox",
                        direction: "RL",
                        getId: function getId(d) {
                            return d.id;
                        },
                        getHeight: function getHeight() {
                            return 16;
                        },
                        getWidth: function getWidth() {
                            return 16;
                        },
                        getVGap: function getVGap() {
                            return 10;
                        },
                        getHGap: function getHGap() {
                            return 100;
                        }
                    }
                });
                graph.node(function(node) {
                    return {
                        label: node.id,
                        labelCfg: {
                            offset: 10,
                            position: node.children && node.children.length > 0 ? "right" : "left"
                        }
                    };
                });
                G6.registerEdge('cubic-horizontal', {
                    draw: function draw(cfg, group) {
                        const targetNode = cfg.targetNode.getModel();
                        const edgeError = !!targetNode.edgeError;

                        const startPoint = cfg.startPoint;
                        const endPoint = cfg.endPoint;
                        const controlPoints = this.getControlPoints(cfg);
                        let points = [ startPoint ]; // 添加起始点
                        // 添加控制点
                        if (controlPoints) {
                            points = points.concat(controlPoints);
                        }
                        // 添加结束点
                        points.push(endPoint);
                        const path = this.getPath(points);

                        group.addShape('path', {
                            attrs: {
                                path,
                                lineWidth: 12,
                                stroke: edgeError ? 'rgba(245,34,45,0.05)' : 'rgba(47,84,235,0.05)',
                                opacity: 0,
                                zIndex: 0
                            },
                            className: 'line-bg'
                        });
                        const keyShape = group.addShape('path', {
                            attrs: {
                                path,
                                lineWidth: 1,
                                stroke: edgeError ? '#FF7875' : 'rgba(0,0,0,0.25)',
                                zIndex: 1,
                                lineAppendWidth: 12
                            },
                            edgeError: !!edgeError
                        });
                        return keyShape;
                    },

                    /* 操作 线 的背景色显示隐藏 */
                    afterDraw: function afterDraw(cfg, group) {
                        /* 背景色 */
                        const lineBG = group.get('children')[0]; // 顺序根据 draw 时确定
                        /* 线条 */
                        const line = group.get('children')[1];
                        line.on('mouseenter', function() {
                            lineBG.attr('opacity', '1');
                            /* 线条如果在没有错误的情况下，在 hover 时候，是需要变成蓝色的 */
                            if (!line.get('edgeError')) {
                                line.attr('stroke', '#2F54EB');
                            }
                            graph.get('canvas').draw();
                        });
                        line.on('mouseleave', function() {
                            lineBG.attr('opacity', '0');
                            if (!line.get('edgeError')) {
                                line.attr('stroke', 'rgba(0,0,0,0.25)');
                            }
                            graph.get('canvas').draw();
                        });
                    },
                    update: null
                }, 'cubic-horizontal');
                graph.data(data);
                graph.render();
                graph.fitView();
            }
        }
    }
</script>
