webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Arpage__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Setup__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__(20);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */],
    children: [{ path: 'setup', component: __WEBPACK_IMPORTED_MODULE_3__components_Setup__["a" /* default */] }, { path: '', redirect: 'ar' }]
  }, {
    path: '/ar',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Arpage__["a" /* default */]
  }]
}));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  app: 'can-ar',
  token: 'dfa4t0ufshudvv0s0',
  state: {
    version: 3,
    commonDB: {
      key: 'id',
      index: [{ index: 'key', path: 'key', unique: false }]
    },
    datatypes: {
      experience: {
        url: 'https://can-ar.server/experience',
        dataModel: {
          id: {
            dataType: 'number'
          },
          type: {
            dataType: 'number'
          },
          srcUrl: {
            dataType: 'string'
          }
        },
        index: [{ index: 'type', path: 'data.type', unique: false }]
      },
      user: {
        url: 'https://can-ar.server/api',
        dataModel: {
          id: {
            dataType: 'number'
          },
          type: {
            dataType: 'number'
          },
          srcUrl: {
            dataType: 'string'
          }
        },
        index: [{ index: 'type', path: 'data.type', unique: false }]
      }
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_local__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_modules_ui__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_modules_user__ = __webpack_require__(29);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import App from './App'







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue__["a" /* default */]);

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

var cb = function () {
  let store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    strict: true,
    modules: {
      ui: __WEBPACK_IMPORTED_MODULE_5__state_modules_ui__["a" /* default */],
      user: __WEBPACK_IMPORTED_MODULE_6__state_modules_user__["a" /* default */]
      // middlewares: [
      //   Logger()
      // ]
    } });

  __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
  __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.devtools = true;
  new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    store
  }).$mount('#app');
  // new Vue({
  //   el: '#app',
  //   router,
  //   store
  // })
  // new Vue({
  //   el: '#app',
  //   router,
  //   store,
  //   template: '<App/>',
  //   components: { App }
  // })
};
__WEBPACK_IMPORTED_MODULE_4__state_local__["a" /* default */].init(cb);

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Arpage_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04097ebe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Arpage_vue__ = __webpack_require__(15);
function injectStyle (ssrContext) {
  __webpack_require__(12)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Arpage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04097ebe_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Arpage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hello',
  data() {
    return {
      msg: 'We have a static site'
    };
  },
  computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapState */])(['user']),
  created() {
    this.$store.dispatch('init');
  },
  methods: {
    answer: function (answer) {
      this.$store.dispatch('answerQuestion', { answer });
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_c('a-scene',{attrs:{"embedded":"","arjs":"trackingMethod: best;"}},[_vm._v("\n\n        <%--"),_c('a-marker-camera',{attrs:{"preset":"custom","url":"https://picspeanutbutter.azurewebsites.net/PICSstar.patt"}}),_vm._v("\n        --%>\n        "),_c('a-assets',[_c('img',{attrs:{"id":"earth","src":"https://raw.githubusercontent.com/aframevr/sample-assets/master/assets/images/space/earth_atmos_4096.jpg"}}),_vm._v(" "),_c('img',{attrs:{"id":"PicPic","src":"/static/img/pics.jpg"}})]),_vm._v(" "),_c('a-anchor',{attrs:{"hit-testing-enabled":"true"}},[_c('a-entity',{attrs:{"id":"jim","geometry":"primitive: box; depth: 1; height: 1; width: 1","material":"src: #PicPic;","ring-on-beat":"analyserEl: #analyser","position":"0 0.25 0"}},[_c('a-animation',{attrs:{"attribute":"rotation","dur":"7000","to":"0 360 0","easing":"linear","repeat":"indefinite"}})],1)],1),_vm._v(" "),_c('a-camera-static')],1),_vm._v(" "),_vm._m(0)],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal fade",attrs:{"id":"questions","tabindex":"-1","role":"dialog","aria-labelledby":"questionsLabel","aria-hidden":"true"}},[_c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title",attrs:{"id":"questionsLabel"}},[_vm._v("We hope you enjoyed your...")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._v("\n            ...\n          ")]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Close")]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"}},[_vm._v("Save changes")])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Setup_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_078c05ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Setup_vue__ = __webpack_require__(19);
function injectStyle (ssrContext) {
  __webpack_require__(17)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Setup_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_078c05ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Setup_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'setup',
  data() {
    return {
      age: 0,
      gender: 0,
      email: null
    };
  },
  created() {},
  methods: {
    answer: function (answer) {
      this.$store.dispatch('setupUser', { answers: {
          age: parseInt(this.age),
          gender: parseInt(this.gender),
          email: this.email
        } });
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("Please tell us a little bit about you")]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"gender"}},[_vm._v("Your gender:")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.gender),expression:"gender"}],staticClass:"form-control",attrs:{"id":"gender","aria-describedby":"genderHelp"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.gender=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("I'd rather not say")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("Male")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("Female")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("Something else")])]),_vm._v(" "),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"genderHelp"}},[_vm._v("Because we all all different beasts")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"age"}},[_vm._v("Your Age")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.age),expression:"age"}],staticClass:"form-control",attrs:{"id":"age","aria-describedby":"ageHelp"},on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.age=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},[_c('option',{attrs:{"value":"0"}},[_vm._v("Select your age group")]),_vm._v(" "),_c('option',{attrs:{"value":"1"}},[_vm._v("less than 10")]),_vm._v(" "),_c('option',{attrs:{"value":"2"}},[_vm._v("10 to 20")]),_vm._v(" "),_c('option',{attrs:{"value":"3"}},[_vm._v("20 to 40")]),_vm._v(" "),_c('option',{attrs:{"value":"4"}},[_vm._v("more than 40")])]),_vm._v(" "),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"ageHelp"}},[_vm._v("So we can tailor to your age group")])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"email"}},[_vm._v("Email address")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"}],staticClass:"form-control",attrs:{"type":"email","id":"email","aria-describedby":"emailHelp","placeholder":"Your email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}}),_vm._v(" "),_c('small',{staticClass:"form-text text-muted",attrs:{"id":"emailHelp"}},[_vm._v("We'll never share your email with anyone else.")])]),_vm._v(" "),_c('b-button',{attrs:{"variant":"primary"},on:{"click":_vm.answer}},[_vm._v("Continue")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eb4efe1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__(23);
function injectStyle (ssrContext) {
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5eb4efe1_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._m(0),_vm._v(" "),_c('main',[_c('router-view')],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('span',[_vm._v("CAN AR")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(5);

// import _ from 'lodash'

var dbErrorHandle = function (event) {
  console.log('Database error: ', event.target.errorCode, event);
};
/* harmony default export */ __webpack_exports__["a"] = ({
  init: function (cb) {
    var request = indexedDB.open(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].app, __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].state.version);
    request.onerror = function (event) {
      alert('Error initialising database: your browser must support IndexedDB');
    };
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      if (event.oldVersion >= 1) {
        db.deleteObjectStore('user');
      }
      db.createObjectStore('user');
      window.localDB = db;
      window.localDB.onerror = dbErrorHandle;
    };
    request.onsuccess = function (event) {
      window.localDB = event.target.result;
      window.localDB.onerror = dbErrorHandle;
      cb();
    };
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let state = {
  experience: {
    type: 'image',
    src: 'static/experience/image.png'
  },
  waiting: false
};

let mutations = {
  waiting: function (state, status) {
    state.waiting = status;
  }
};

let actions = {
  init: function (context) {},
  waiting: function (context, status) {
    context.commit('waiting', status);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  mutations,
  actions
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v1__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid_v1___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid_v1__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(4);





let url = __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].state.datatypes.user.url;

let state = {
  waiting: false,
  name: '',
  email: '',
  id: null,
  qa: {}
};

let mutations = {
  set_user: function (state, user) {
    if (user.name) state.name = user.name;
    if (user.location) state.location = user.location;
    if (user.info) state.info = user.info;
    state.id = user.id;
  },
  set_qa: function (state, qa) {
    state.qa.id = qa.id;
    state.qa.question = qa.question;
    state.qa.answer = qa.answer;
  },
  user_wait: function (state, status) {
    state.waiting = status;
  }
};

let actions = {
  init: function (context) {
    let newSession = function () {
      let postData = {
        // name: state.name,
        location: 0,
        info: state.info,
        // email: state.email,
        id: state.id
      };
      if (!postData.id) postData.id = __WEBPACK_IMPORTED_MODULE_2_uuid_v1___default()();
      let cb = function (position) {
        if (position) {
          postData.location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            acc: position.coords.accuracy,
            ts: position.timestamp
          };
        }
        context.commit('set_user', postData);
        context.dispatch('save_local');
        __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
          url: url,
          type: 'POST',
          dataType: 'json',
          data: postData,
          headers: {
            'Authorization': 'JWT ' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].token
          },
          success: function (result) {
            context.commit('user_wait', false);
            context.commit('set_qa', result.qa);
          },
          error: function (xhr, status, error) {
            console.log('Server error' + status);
          }
        });
      };
      let getNav = function () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(cb);
        } else {
          cb(null);
        }
      };
      if (!postData.info) {
        __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].push('/setup');
      } else {
        getNav();
      }
    };
    console.log('init');
    context.dispatch('check_local', { db: 'user', cb: newSession });
  },
  postAnswer: function (context) {
    context.commit('user_wait', true);
    let postData = {
      uid: state.id,
      qid: state.qa.id,
      answer: state.qa.answer
    };
    __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: postData,
      headers: {
        'Authorization': 'JWT ' + __WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */].token
      },
      success: function (result) {
        context.commit('user_wait', false);
        context.commit('set_qa', result.qa);
      },
      error: function (xhr, status, error) {
        console.log('Server error' + status);
      }
    });
  },
  answerQuestion: function (context, { answer }) {
    context.commit('set_qa', {
      id: state.qa.id,
      question: state.qa.question,
      answer
    });
    context.dispatch('save_local');
    context.dispatch('postAnswer');
  },
  setupUser: function (context, { answers }) {
    console.log(answers);
    context.commit('set_user', { info: answers });
    context.dispatch('save_local');
    __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */].push('/ar');
  },
  save_local({ state, commit }) {
    var db = window.localDB;
    var tr = db.transaction(['user'], 'readwrite');
    tr.objectStore('user').put(state, 'session');
  },
  check_local({ state, commit, dispatch }, { db, cb }) {
    var tr = window.localDB.transaction(['user'], 'readwrite');
    var localSession = tr.objectStore('user').get('session');
    localSession.onsuccess = function (event) {
      if (localSession.result) {
        commit('set_user', localSession.result);
      }
      cb();
    };
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  mutations,
  actions
});

/***/ })
],[6]);
//# sourceMappingURL=app.65b37f26aa902525b7d8.js.map