var posts=["post/1.html","post/6.html","post/56547.html","post/4.html","post/3.html","post/5.html","post/2.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Adil","hundredSuffix":"","link":"https://blog.adil.com.cn","avatar":"https://tucdn.wpon.cn/2023/04/06/15dbbb2004b44.jpg","descr":"BW/HANA顾问,BI工程师,数据分析师,数据科学家。","siteshot":"https://tucdn.wpon.cn/2023/04/06/126fba2e88c54.png"},{"name":"Tianlin_Zz","link":"https://linjiangyu.com","avatar":"https://cdn1.tianli0.top/gh/linjiangyu2/halo/img/fa.jpg","descr":"这世界温暖的人如树一样多 我也想成为其中的一颗","siteshot":"https://cdn1.tianli0.top/gh/linjiangyu2/halo/img/siteshot.jpg"},{"name":"Cartafi","link":"https://www.startly.cn","avatar":"https://startly.s3.bitiful.net/links/avatar/avatar.webp","descr":"互联网中的寂静之地","siteshot":"https://startly.s3.bitiful.net/links/avatar/siteshot.webp"},{"name":"Mxne","link":"https://blog.mxne.cn/","avatar":"https://bu.dusays.com/2023/02/05/63df7de56a470.webp","descr":"学如逆水行舟，不进则退。","siteshot":"https://bu.dusays.com/2023/05/13/645f0d59564f1.webp"},{"name":"安心","link":"https://lookanxin.cc/","avatar":"https://img1.imgtp.com/2023/05/14/YpgQ3ffc.jpg","descr":"Coolanxin"},{"name":"Rootlex","link":"https://blog.nalex.top","avatar":"https://bu.dusays.com/2023/01/25/63d130a6ce9ea.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志"},{"name":"SimpleFish","hundredSuffix":"","link":"http://sss.cool/getChineseId/","avatar":"https://sss.cool/getChineseId/favicon.ico","descr":"这是一个简单的计算ID数值号平台。"}];
    var refreshNum = 1;
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };