<template>
 <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        > 
        <div class="gutter-example">
            <a-row :gutter="16">
              <a-col class="gutter-row" :span="12">
                <div class="gutter-box"><a-icon style="font-size:22px !important;" type="gold" />
                <span class="secondary-text">Production House </span></div>
              </a-col>
            
              <a-col class="gutter-row" :span="6">
                <div class="gutter-box">
            
              <a-dropdown>
                  <a class="ant-dropdown-link" href="#"> Categories <a-icon type="caret-down" style="color: #fff" /></a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                  </a-menu>
              </a-dropdown>
                </div>
              </a-col>
              <a-col class="gutter-row" :span="6">
                <div class="components-input-demo-presuffix">
                <a-input placeholder="Search..." v-model="search" ref="userNameInput">
                  <a-icon slot="prefix" type="search" />
                  <a-tooltip slot="suffix" title="Clear field">
                    <a-icon type="close" style="color: rgba(0,0,0,.45)" />
                  </a-tooltip>
            </a-input>
            </div>
              </a-col>
            </a-row>
        </div>
          
        <div class="layout-menu">
          <ul>
            <li>
              <router-link class="links active"><span class="primary-text">All Productions <a-badge count="129"></a-badge></span></router-link>
            <a-divider type="vertical" /></li>
            <li>
              <router-link class="links"><span class="primary-text">Awaiting Production <a-badge count="9"></a-badge></span></router-link>
              <a-divider type="vertical" />
            </li>
            <li>
              <router-link class="links"><span class="primary-text">Completed </span></router-link>
            </li>

          <li>
              <router-link class="print"><span class="primary-text">Print Worksheet</span></router-link>
            <a-divider type="vertical" /></li>
            <li>

           <a class="ant-dropdown-link2" href="#"> Mark as Completed <a-icon type="caret-down" style="color: #000" /></a>
              <a-divider type="vertical" />
            </li>
            <li>
              <router-link class="save"><span class="primary-text">Save</span></router-link>
            </li>
          </ul>
        </div>
 </a-layout-content>
</template>

<script>
export default {
  name: "Cont   entnav",
}
</script>