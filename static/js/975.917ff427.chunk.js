"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[975],{8026:function(e,r,n){n.d(r,{c:function(){return d},l:function(){return i}});var a,o,s=n(168),l=n(225),t=n(6151),i=l.Z.form(a||(a=(0,s.Z)(["\n    display: flex;\n    gap: 15px;\n    justify-content: start;\n    align-items: baseline;\n    margin-top: 40px;\n    margin-bottom: 40px;\n\n"]))),d=(0,l.Z)(t.Z)(o||(o=(0,s.Z)(["\n  border: 1px solid;\n  border-color: #1f398786;\n  &:hover,\n  :active,\n  :focus {\n    border-color:rgba(3, 44, 84, 0.5);\n    box-shadow: 0 0 0 1px rgba(3, 44, 84, 0.5);\n  }\n"])))},2975:function(e,r,n){n.r(r),n.d(r,{default:function(){return u}});n(2791);var a=n(8096),o=n(4925),s=n(5999),l=n(8026),t=n(5705),i=n(6727),d=n(184);var m=function(){var e=i.Ry().shape({name:i.Z_().min(3,"Too Short!").max(50,"Too Long!").required("Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+((['-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name can only contain letters"),email:i.Z_().email("Invalid email").required("Required"),password:i.Z_().required("No password provided.").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),r=(0,t.TA)({initialValues:{name:"",email:"",password:""},validate:function(r){var n={};try{e.validateSync(r,{abortEarly:!1})}catch(a){a.inner.forEach((function(e){n[e.path]=e.message}))}return n},onSubmit:function(e){console.log(e),r.resetForm()}});return(0,d.jsxs)(l.l,{onSubmit:r.handleSubmit,children:[(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(o.Z,{htmlFor:"name",children:"Name"}),(0,d.jsx)(s.Z,{size:"small",type:"text",id:"name",name:"name",value:r.values.name,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"on",error:r.touched.name&&Boolean(r.errors.name)}),r.touched.name&&r.errors.name?(0,d.jsx)("div",{children:r.errors.name}):null]}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(o.Z,{htmlFor:"email",children:"Email"}),(0,d.jsx)(s.Z,{size:"small",type:"text",id:"email",name:"email",value:r.values.email,onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"on",error:r.touched.email&&Boolean(r.errors.email)}),r.touched.email&&r.errors.email?(0,d.jsx)("div",{children:r.errors.email}):null]}),(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(o.Z,{htmlFor:"password",children:"Password"}),(0,d.jsx)(s.Z,{id:"password",type:"password",name:"password",value:r.values.password,error:r.touched.password&&Boolean(r.errors.password),onChange:r.handleChange,onBlur:r.handleBlur,autoComplete:"on"}),r.touched.password&&r.errors.password?(0,d.jsx)("div",{children:r.errors.password}):null]}),(0,d.jsx)(l.c,{type:"submit",children:"Add contact"})]})};var u=function(){return(0,d.jsx)(m,{})}}}]);
//# sourceMappingURL=975.917ff427.chunk.js.map