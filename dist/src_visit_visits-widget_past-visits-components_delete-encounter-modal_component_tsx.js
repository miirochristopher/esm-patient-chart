"use strict";
(globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] = globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] || []).push([["src_visit_visits-widget_past-visits-components_delete-encounter-modal_component_tsx"],{

/***/ "./src/visit/visits-widget/past-visits-components/delete-encounter-modal.component.tsx":
/*!*********************************************************************************************!*\
  !*** ./src/visit/visits-widget/past-visits-components/delete-encounter-modal.component.tsx ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _root_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../root.scss */ "./src/root.scss");




var DeleteEncounterConfirmation = function(param) {
    var close = param.close, onConfirmation = param.onConfirmation, encounterTypeName = param.encounterTypeName;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;
    var handleCancel = function() {
        return close();
    };
    var handleDelete = function() {
        return onConfirmation === null || onConfirmation === void 0 ? void 0 : onConfirmation();
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
        closeModal: close,
        className: _root_scss__WEBPACK_IMPORTED_MODULE_3__["default"].productiveHeading03
    }, t("deleteEncounter", "Delete Encounter"), "?"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        className: _root_scss__WEBPACK_IMPORTED_MODULE_3__["default"].bodyLong01
    }, t("deleteEncounterConfirmationText", "Are you sure you want to delete this encounter? This action can't be undone.", {
        encounter: encounterTypeName
    }))), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.ModalFooter, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        size: "lg",
        kind: "secondary",
        onClick: handleCancel
    }, t("cancel", "Cancel")), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
        autoFocus: true,
        kind: "danger",
        onClick: handleDelete,
        size: "lg"
    }, t("delete", "Delete"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteEncounterConfirmation);


/***/ })

}]);
//# sourceMappingURL=src_visit_visits-widget_past-visits-components_delete-encounter-modal_component_tsx.js.map