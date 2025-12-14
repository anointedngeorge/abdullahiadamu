//�Xara Ltd
if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML;var ml=tt.match(/["']([^'"]*)menu_.js["']/i);if(ml && ml.length > 1) loc=ml[1];}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".menu__menu {z-index:999;border-color:#000000;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#7d7b05;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write(".menu__plain, a.menu__plain:link, a.menu__plain:visited{text-align:left;background-color:#7d7b05;color:#ffffff;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("a.menu__plain:hover, a.menu__plain:active{background-color:#faf50a;color:#000000;text-decoration:none;border-color:#000000;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:8pt;font-family:Arial, Helvetica, sans-serif;font-weight:bold;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0x000000;
var bc=0xfaf50a;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("menu__left.gif",27,27,2,0,0)
mainMenuItem("menu__b1",".gif",27,92,"http://www.abdullahiadamu.net/index.html","","Home",2,2,"menu__plain");
mainMenuItem("menu__b2",".gif",27,92,"http://www.abdullahiadamu.net/profile_menu.html","","Profile",2,2,"menu__plain");
mainMenuItem("menu__b3",".gif",27,92,"http://www.abdullahiadamu.net/speeches_menu.html","","Speeches",2,2,"menu__plain");
mainMenuItem("menu__b4",".gif",27,92,"http://www.abdullahiadamu.net/news_menu.html","","News",2,2,"menu__plain");
mainMenuItem("menu__b5",".gif",27,92,"http://www.abdullahiadamu.net/press_menu.html","","Press",2,2,"menu__plain");
mainMenuItem("menu__b6",".gif",27,92,"http://www.abdullahiadamu.net/photos_menu.html","","Photos",2,2,"menu__plain");
mainMenuItem("menu__b7",".gif",27,92,"http://www.abdullahiadamu.net/videos_menu.html","","Videos",2,2,"menu__plain");
mainMenuItem("menu__b8",".gif",27,92,"http://www.abdullahiadamu.net/nasarawa_menu.html","","Nasarawa",2,2,"menu__plain");
mainMenuItem("menu__b9",".gif",27,92,"http://www.abdullahiadamu.net/feedback_menu.html","","Feedback",2,2,"menu__plain");
endMainMenu("menu__right.gif",27,27)

startSubmenu("menu__b3","menu__menu",122);
submenuItem("Building Bridges","http://www.abdullahiadamu.net/bridges_menu.html","","menu__plain");
submenuItem("Conflict Resolution","http://www.abdullahiadamu.net/conflict_menu.html","","menu__plain");
submenuItem("Economy","http://www.abdullahiadamu.net/economy_menu.html","","menu__plain");
submenuItem("Education","http://www.abdullahiadamu.net/education_menu.html","","menu__plain");
submenuItem("Health","http://www.abdullahiadamu.net/health_menu.html","","menu__plain");
submenuItem("Global Affairs","http://www.abdullahiadamu.net/global_menu.html","","menu__plain");
submenuItem("Local Government","http://www.abdullahiadamu.net/local_menu.html","","menu__plain");
submenuItem("Politics","http://www.abdullahiadamu.net/politics_menu.html","","menu__plain");
submenuItem("Science/Technology","http://www.abdullahiadamu.net/science_menu.html","","menu__plain");
submenuItem("Society","http://www.abdullahiadamu.net/society_menu.html","","menu__plain");
submenuItem("Youth/Sports","http://www.abdullahiadamu.net/youth_menu.html","","menu__plain");
endSubmenu("menu__b3");

loc="";
