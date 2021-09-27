exports.id = 244;
exports.ids = [244];
exports.modules = {

/***/ 8244:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Portfolioform; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "react-datepicker"
var external_react_datepicker_ = __webpack_require__(9008);
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_);
// EXTERNAL MODULE: external "react-image-file-resizer"
var external_react_image_file_resizer_ = __webpack_require__(4609);
var external_react_image_file_resizer_default = /*#__PURE__*/__webpack_require__.n(external_react_image_file_resizer_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./components/FileUpload.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FileUpload = ({
  values,
  setValues,
  setLoading
}) => {
  // const { user } = useSelector((state) => ({ ...state }));
  const fileUploadAndResize = e => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files;
    let allUploadedFiles = values.images;

    if (files) {
      setLoading(true);

      for (let i = 0; i < files.length; i++) {
        external_react_image_file_resizer_default().imageFileResizer(files[i], 720, 720, "JPEG", 100, 0, uri => {
          // console.log(uri);
          external_axios_default().post(`${process.env.REACT_APP_API}/uploadimages`, {
            image: uri
          } //   {
          //     headers: {
          //       authtoken: user ? user.token : "",
          //     },
          //   }
          ).then(res => {
            console.log("IMAGE UPLOAD RES DATA", res);
            setLoading(false);
            allUploadedFiles.push(res.data);
            setValues(_objectSpread(_objectSpread({}, values), {}, {
              images: allUploadedFiles
            }));
          }).catch(err => {
            setLoading(false);
            console.log("CLOUDINARY UPLOAD ERR", err);
          });
        }, "base64");
      }
    } // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate

  };

  const handleImageRemove = public_id => {
    setLoading(true); // console.log("remove image", public_id)

    external_axios_default().post(`${process.env.REACT_APP_API}/removeimage`, {
      public_id
    }, {//   headers: {
      //       authtoken: user ? user.token : "",
      //   },
    }).then(res => {
      setLoading(false);
      const {
        images
      } = values;
      let filteredImages = images.filter(item => {
        return item.public_id !== public_id;
      });
      setValues(_objectSpread(_objectSpread({}, values), {}, {
        images: filteredImages
      }));
    }).catch(err => {
      console.log(err);
      setLoading(false);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: values.images && values.images.map(image => /*#__PURE__*/jsx_runtime_.jsx("div", {
        count: "x",
        onClick: () => handleImageRemove(image.public_id),
        style: {
          cursor: "pointer"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: image.url,
          size: 100,
          shape: "square",
          className: "ml-3"
        })
      }, image.public_id))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
        className: "btn btn-primary mt-3 btn-raised",
        children: ["Choose File", /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "file",
          multiple: true,
          hidden: true,
          accept: "images/*",
          onChange: fileUploadAndResize
        })]
      })
    })]
  });
};

/* harmony default export */ var components_FileUpload = (FileUpload);
;// CONCATENATED MODULE: ./components/Portfolioform.js



function Portfolioform_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Portfolioform_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Portfolioform_ownKeys(Object(source), true).forEach(function (key) { Portfolioform_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Portfolioform_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Portfolioform_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {
  images: []
};

const PortfolioForm = ({
  onSubmit,
  initialData = {}
}) => {
  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)(initialState);
  const {
    0: startDate,
    1: setStartDate
  } = (0,external_react_.useState)(null);
  const {
    0: endDate,
    1: setEndDate
  } = (0,external_react_.useState)(null);
  const {
    register,
    handleSubmit,
    setValue,
    photo
  } = (0,external_react_hook_form_.useForm)({
    defaultValues: initialData
  }); // const [uploaded, setUploaded] = useState(false)

  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    register('startDate');
    register('endDate');
  }, [register]);
  (0,external_react_.useEffect)(() => {
    const {
      startDate,
      endDate
    } = initialData;

    if (startDate) {
      setStartDate(new Date(startDate));
    }

    if (endDate) {
      setEndDate(new Date(endDate));
    }
  }, [initialData]);

  const handleDateChange = (dateType, setDate) => date => {
    setValue(dateType, date);
    setDate(date);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "title",
        children: "Title"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("title")), {}, {
        name: "title",
        type: "text",
        className: "form-control",
        id: "title"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "city",
        children: "Company"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("company")), {}, {
        name: "company",
        type: "text",
        className: "form-control",
        id: "company"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "city",
        children: "Company Website"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("companyWebsite")), {}, {
        name: "companyWebsite",
        type: "text",
        className: "form-control",
        id: "companyWebsite"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "street",
        children: "Location"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("location")), {}, {
        name: "location",
        type: "text",
        className: "form-control",
        id: "location"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "street",
        children: "Job Title"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("jobTitle")), {}, {
        name: "jobTitle",
        type: "text",
        className: "form-control",
        id: "jobTitle"
      }))]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_FileUpload, Portfolioform_objectSpread(Portfolioform_objectSpread({
      className: "form-group",
      values: values,
      setValues: setValues,
      setLoading: setLoading // setUploaded={setUploaded}

    }, register("images")), {}, {
      id: "images"
    })), JSON.stringify(values), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "description",
        children: "Description"
      }), /*#__PURE__*/jsx_runtime_.jsx("textarea", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("description")), {}, {
        name: "description",
        rows: "5",
        type: "text",
        className: "form-control",
        id: "description"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "street",
        children: "Tech Stack"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", Portfolioform_objectSpread(Portfolioform_objectSpread({}, register("techStack")), {}, {
        name: "techStack",
        type: "text",
        className: "form-control",
        id: "techStack"
      }))]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "startDate",
        children: "Start Date"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
          showYearDropdown: true,
          selected: startDate,
          onChange: handleDateChange('startDate', setStartDate)
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: "endDate",
        children: "End Date"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_datepicker_default()), {
          disabled: !endDate,
          showYearDropdown: true,
          selected: endDate,
          onChange: handleDateChange('endDate', setEndDate)
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "form-group",
      children: [endDate && /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "btn btn-danger",
        onClick: () => handleDateChange('endDate', setEndDate(null)),
        children: "No end date"
      }), !endDate && /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        className: "btn btn-success",
        onClick: () => handleDateChange('endDate', setEndDate(new Date(new Date().setHours(0, 0, 0, 0)))),
        children: "Set end date"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "submit",
      className: "btn btn-primary",
      children: "Create"
    })]
  });
};

/* harmony default export */ var Portfolioform = (PortfolioForm);

/***/ })

};
;