import {
    amber, blue, blueGrey,
    brown, common, cyan, deepOrange,
    deepPurple, green, grey,
    indigo, lightBlue, lightGreen, lime,
    orange, pink, purple, red, teal, yellow
} from '../../components/Color/index'

Page({
    data: {
        amber: {},
        blue: {}, blueGrey: {},
        brown: {}, common: {}, cyan: {}, deepOrange: {},
        deepPurple: {}, green: {}, grey: {},
        indigo: {}, lightBlue: {}, lightGreen: {}, lime: {},
        orange: {}, pink: {}, purple: {}, red: {}, teal: {}, yellow: {}
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            amber: {
                key: 'amber',
                array: amber
            },
            blue: {
                key: 'blue',
                array: blue
            },
            blueGrey: {
                key: 'blueGrey',
                array: blueGrey
            },
            brown: {
                key: 'brown',
                array: brown
            },
            common: {
                key: 'common',
                array: common
            },
            cyan: {
                key: 'cyan',
                array: cyan
            }, deepOrange: {
                key: 'deepOrange',
                array: deepOrange
            }, deepPurple: {
                key: 'deepPurple',
                array: deepPurple
            },
            green: {
                key: 'green',
                array: green
            },
            grey: {
                key: 'grey',
                array: grey
            },
            indigo: {
                key: 'indigo',
                array: indigo
            },
            lightBlue: {
                key: 'lightBlue',
                array: lightBlue
            }, lightGreen: {
                key: 'lightGreen',
                array: lightGreen
            }, lime: {
                key: 'lime',
                array: lime
            }, orange: {
                key: 'orange',
                array: orange
            }, pink: {
                key: 'pink',
                array: pink
            }, purple: {
                key: 'purple',
                array: purple
            }, red: {
                key: 'red',
                array: red
            }, teal: {
                key: 'teal',
                array: teal
            },
            yellow: {
                key: 'yellow',
                array: yellow
            }
        });
    },
    onReady: function () {
    },
});
