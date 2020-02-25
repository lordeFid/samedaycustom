    <template>
    <a-layout id="components-layout-demo-custom-trigger">

        <!----------- SideBar Starts here ----------->
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      
       <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
            />
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
            <a-menu-item key="1">
            <a-icon class="icons" type="appstore" />
            <span> Dashboard</span> 
            </a-menu-item> 
            
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon class="icons" type="pie-chart" /><span>Operations</span></span>
              
              <a-menu-item key="3">Orders <a-badge count="7"></a-badge></a-menu-item>
              <a-menu-item key="4">Production House <a-badge count="9"></a-badge></a-menu-item>
              <a-menu-item key="5">Bids <a-badge count="1"></a-badge></a-menu-item>
              <a-menu-item key="6">Promotion/Discounts</a-menu-item>
              <a-menu-item key="7">Out Sourcing</a-menu-item>
            </a-sub-menu>
            
            <a-menu-item key="8">
            <a-icon class="icons" type="profile" /> 
            <span>Records</span>
            </a-menu-item>
            <a-menu-item key="9">
            <a-icon class="icons" type="shopping-cart" />
            <span>Supply Store</span>
            </a-menu-item>
            <a-menu-item key="10">
              <a-icon class="icons" type="area-chart" />
            <span>Market Place</span>
            </a-menu-item>
            <a-menu-item key="11">
              <a-icon class="icons" type="team" />
            <span>Forum</span>
            </a-menu-item>
            <a-menu-item key="12" style="margin-top: 180px;">
            <a-icon class="icons" type="setting" />
            <span>Settings</span>
            </a-menu-item>
        </a-menu>
        </a-layout-sider>
        <!------------------------SideBAr Ends Here -------------------------->

        <!--------- Header Starts here ------------------------>
        <a-layout>
        <a-layout-header style="background: #fff; padding: 0">

                      <!------------------ Logo goes here --------------------->
                      <img style="height: 5em; width:5em; margin-left:32px;" src="../assets/img/download.png" alt="Logo">
                <div class="nav-items">

                  <!--------Search bar ------>
                    <span class="split icons"><a-icon id="searchBar" type="search" style="color: #000;" /></span>
                  
                  <!-------- Messages ------->
                  <a-badge count="5">
                    <a-icon class="icons" type="mail" />
                  </a-badge>
                    <span class="split"> Messages</span>
                    
                  <!-------- Market Place ------->
                  <a-badge count="5"> 
                    <a-icon class="icons" type="shopping-cart" />
                  </a-badge>
                    <span class="split"> Market Place <a-icon type="caret-down" style="color: #303a52" /></span>


                  <!-------- Notifications ------>
                    
                    <a-badge count="5">
                      <a-icon class="icons" type="bars" /></a-badge>
                      <span class="split"> Notifications </span>

                  <!-------- Profile Picture ------->
                    <span class="profilepic"><img src="../assets/img/profile-img.jpg" style="height: 35px; width: 35px; border-radius: 30px;"><a-icon type="caret-down" style="color: #303a52" /></span>
                </div>

        </a-layout-header>
        <!-------------------------- Header Ends Here ------------------------->

        <!--------------------------------- Content Layout Starts Here --------------->
        <Contentnav />
        </a-layout>
    </a-layout>
    </template>

<script>
import Contentnav from './views/Contentnav'

    export default {
      name: "Home",
      components: {
        Contentnav,
      },
        data() {
          return {
            collapsed: false,
            search: '',
            tabPosition: 'top',
        }
      },
        methods: {
      emitEmpty() {
        this.$refs.searchInput.focus();
        this.search = '';
      },
    },
      callback(val) {
        console.log(val);
      },
    };
    </script>
    
    <style>
 

.split {
  line-height: 64px;
    display: inline;
    margin-right: 25px;
    margin-left: 8px;
    font-size: 10px;
  left: 50%;
}


.layout-menu {
  border-bottom: 1px solid #b5d3d3;
  margin-top: 100px;
  font-size: 12px;
  margin-left: -18px;
}
.links {
  cursor: pointer;
  /* margin-right: -3px;  */
}
.print {
  cursor: pointer;
  margin-left: 180px;
  border: 1px solid #dbd2d2;
  padding-top: 6px;
  padding-right: 8px;
  padding-bottom: 6px;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  /* margin-right: -3px;  */
}
links.active {
  color: #3d5af1;
  border-bottom: 1px solid #3d5af1;
}
.links:hover{
    padding-bottom: 10px;
   color:#3d5af1;
   border-bottom: 1px solid #3d5af1;
}
.save {
  cursor: pointer;
  padding-right: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  border: 1px solid #dbd2d2;
  background: #999;
  border-radius: 5px;
  text-decoration: none;
}

li {
  display: inline;
  

}
.ant-badge-count {
    min-width: 10px !important;
    height: 10px !important;
    padding: 0 0px !important;
    font-size: 8px !important;
    line-height: 10px !important;
}
.ant-menu-dark {
  background: #3d5af1 !important;  
}
.icons {
  font-size: 16px;
}
a{
  text-decoration: none;
}
.nav-items {
  float: right;
  margin-right: 40px;
}
.ant-menu-dark.ant-menu-inline, .ant-menu-item, .ant-menu-dark.ant-menu-inline .ant-menu-submenu-title {
background: #3d5af1 !important;
}.ant-menu-dark,.ant-menu-inline.ant-menu-sub {
    background: #3d5af1 !important;
}

/* .gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
  } */
  
  .ant-dropdown-link {
    border: 1px solid #3d5af1;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    margin-left: 140px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    background: #3d5af1;
  }
  .ant-dropdown-link2 {
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    border-radius: 5px;
  }

#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    margin: 10px auto auto 10px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    }
#components-layout-demo-custom-trigger .trigger:hover {
    color: #d4e0eb;
}
.ant-menu-item-selected {
    background-color: #22d1ee !important;
  }
  .components-input-demo-presuffix .anticon-close-circle {
    cursor: pointer;
    color: #ccc;
    transition: color 0.3s;
    font-size: 12px;
  }
  .components-input-demo-presuffix .anticon-close-circle:hover {
    color: #999;
  }
  .components-input-demo-presuffix .anticon-close-circle:active {
    color: #666;
  }
  
.home {
    margin-top: 30px !important;
    font-size: 30px;
    margin-left: 40%;
    color: #fff;
    margin-bottom: 30px;
    }
.ant-menu-item {
  margin-bottom: 15px !important;
}
.ant-layout-sider-children {
  background: #3d5af1 !important;
}
ul.ant-menu[data-v-a55c5922] {
    margin-top: 90px;
}

.employee-nav[data-v-a55c5922] {  
    padding-left: 16px;
    height: 40px;
}

    </style>
