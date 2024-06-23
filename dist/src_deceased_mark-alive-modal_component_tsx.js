"use strict";
(globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] = globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] || []).push([["src_deceased_mark-alive-modal_component_tsx"],{

/***/ "./src/deceased/mark-alive-modal.component.tsx":
/*!*****************************************************!*\
  !*** ./src/deceased/mark-alive-modal.component.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _deceased_resource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deceased.resource */ "./src/deceased/deceased.resource.ts");





var MarkPatientAsAlive = function(param) {
    var closeDialog = param.closeDialog, patientUuid = param.patientUuid;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var handleSubmit = function(e) {
        e.preventDefault();
        closeDialog();
        (0,_deceased_resource__WEBPACK_IMPORTED_MODULE_4__.markPatientAlive)(patientUuid, new AbortController()).then(function(response) {
            if (response.ok) {
                closeDialog();
                (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.showSnackbar)({
                    isLowContrast: true,
                    kind: "success",
                    title: t("markAsAlive", "Mark As Alive"),
                    subtitle: t("setAliveSuccessfully", "Patient has been marked alive successfully")
                });
            }
        }).catch(function(error) {
            (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.showSnackbar)({
                title: t("setAliveError", "Error marking patient alive"),
                kind: "error",
                isLowContrast: false,
                subtitle: error === null || error === void 0 ? void 0 : error.message
            });
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.ModalHeader, {
        closeModal: closeDialog,
        title: t("markAsAlive", "Mark As Alive")
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.ModalBody, null, t("confirmMarkAsAlive", "Are you sure, you want to mark patient as alive?")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.ModalFooter, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        kind: "secondary",
        onClick: closeDialog
    }, t("no", "No")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: function(e) {
            return handleSubmit(e);
        }
    }, t("yes", "Yes"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkPatientAsAlive);


/***/ })

}]);
//# sourceMappingURL=src_deceased_mark-alive-modal_component_tsx.js.map