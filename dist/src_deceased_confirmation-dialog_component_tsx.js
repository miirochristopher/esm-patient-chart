"use strict";
(globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] = globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] || []).push([["src_deceased_confirmation-dialog_component_tsx"],{

/***/ "./src/deceased/confirmation-dialog.component.tsx":
/*!********************************************************!*\
  !*** ./src/deceased/confirmation-dialog.component.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_2__);



var ConfirmMarkAsDeceasedDialog = function(param) {
    var closeDialog = param.closeDialog, handleSubmit = param.handleSubmit;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.ModalHeader, {
        closeModal: closeDialog,
        title: t("confirmDeceased", "Confirm Deceased")
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null, t("markAsDeceased", "Are you sure you want to mark patient as deceased?")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        kind: "secondary",
        onClick: closeDialog
    }, t("no", "No")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        kind: "danger",
        onClick: function(e) {
            closeDialog();
            handleSubmit(e);
        }
    }, t("yes", "Yes"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmMarkAsDeceasedDialog);


/***/ })

}]);
//# sourceMappingURL=src_deceased_confirmation-dialog_component_tsx.js.map