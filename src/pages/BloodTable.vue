<template>
    <div>
        <div id="container" />
        <span>123</span>
    </div>
</template>

<script>
    import G6 from "@antv/g6";

    export default {
        mounted() {
            this.initG6()
        },
        methods: {
            initG6() {
                const data = {
                    "nodes": [{
                        "id": "a",
                        "label": "label1"
                    },
                        {
                            "id": "b",
                            "label": "1"
                        }],
                    "edges": [{
                        "source": "a",
                        "target": "b"
                    }]
                };

                const graph = new G6.Graph({
                    container: 'container',
                    width: 1000,
                    height: 600,
                    modes: {
                        default: ['drag-canvas', 'drag-node'],
                    },
                    animate: true,
                    defaultNode: {
                        size: [ 20, 20 ],
                        color: 'steelblue',
                        style: {
                            lineWidth: 2,
                            fill: '#fff'
                        }
                    },
                    defaultEdge: {
                        size: 1,
                        color: '#e2e2e2',
                        style: {
                            endArrow: {
                                path: 'M 4,0 L -4,-4 L -4,4 Z',
                                d: 4
                            }
                        }
                    }
                });
                graph.data(data);
                graph.render();
            }
        }
    }
</script>

<style scoped>

</style>
