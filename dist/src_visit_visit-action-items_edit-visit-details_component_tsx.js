"use strict";
(globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] = globalThis["webpackChunk_miirochristopher_esm_patient_chart_app"] || []).push([["src_visit_visit-action-items_edit-visit-details_component_tsx"],{

/***/ "./src/visit/visit-action-items/edit-visit-details.component.tsx":
/*!***********************************************************************!*\
  !*** ./src/visit/visit-action-items/edit-visit-details.component.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @carbon/react */ "webpack/sharing/consume/default/@carbon/react/@carbon/react");
/* harmony import */ var _carbon_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carbon_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openmrs/esm-framework */ "webpack/sharing/consume/default/@openmrs/esm-framework/@openmrs/esm-framework");
/* harmony import */ var _openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "webpack/sharing/consume/default/react-i18next/react-i18next");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _openmrs_esm_patient_common_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @openmrs/esm-patient-common-lib */ "webpack/sharing/consume/default/@openmrs/esm-patient-common-lib/@openmrs/esm-patient-common-lib");
/* harmony import */ var _openmrs_esm_patient_common_lib__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_openmrs_esm_patient_common_lib__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _carbon_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @carbon/react/icons */ "../../node_modules/@carbon/icons-react/es/generated/bucket-5.js");






var EditVisitDetailsActionItem = function(param) {
    var visit = param.visit;
    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;
    var isTablet = (0,_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.useLayoutType)() === "tablet";
    var editVisitDetails = function() {
        (0,_openmrs_esm_patient_common_lib__WEBPACK_IMPORTED_MODULE_4__.launchPatientWorkspace)("start-visit-workspace-form", {
            workspaceTitle: t("editVisitDetails", "Edit visit details"),
            visitToEdit: visit
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_openmrs_esm_framework__WEBPACK_IMPORTED_MODULE_2__.UserHasAccess, {
        privilege: "Edit Visits"
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_carbon_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        onClick: editVisitDetails,
        kind: "ghost",
        renderIcon: _carbon_react_icons__WEBPACK_IMPORTED_MODULE_5__.Edit,
        size: isTablet ? "lg" : "sm"
    }, t("editVisitDetails", "Edit visit details")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditVisitDetailsActionItem);


/***/ })

}]);
//# sourceMappingURL=src_visit_visit-action-items_edit-visit-details_component_tsx.js.map