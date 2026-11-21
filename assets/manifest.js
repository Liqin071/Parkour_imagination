/* 美术资源清单（可留空 —— 留空时游戏用内置程序绘制）
   命名与尺寸规范见仓库根目录的「美术资源命名规范.md」。
   有图之后按下面的格式补上即可（或交给维护者补齐）：

window.ART_MANIFEST = {
  bg: {
    "1": { base: "bg/bg1_base.png",
           layers: [ {src:"bg/bg1_far.png", par:0.10},
                     {src:"bg/bg1_mid.png", par:0.22},
                     {src:"bg/bg1_near.png", par:0.34} ] },
    "2": { … }, "3": { … }, "4": { … }
  },
  near:      { "1": [ {src:"near/near1_01.png"} ], "2": [], "3": [], "4": [] },
  obstacle:  { "1": [ {src:"obstacle/ob1_01.png", h:52} ], "2": [], "3": [], "4": [] },
  avatar:    { creator:"avatar/creator.png", collector:"avatar/collector.png",
               historian:"avatar/historian.png", empath:"avatar/empath.png",
               painter:"avatar/painter.png", muse:"avatar/muse.png",
               pioneer:"avatar/pioneer.png" }
};
*/
window.ART_MANIFEST = {
  bg: {},
  near: {},
  obstacle: {},
  avatar: {}
};
