import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{s as m}from"./index-DlyO01os.js";import{A}from"./Avatar-DIASer-U.js";import{C as D}from"./Chip-Cg86GGnn.js";import{a as k}from"./Icon.types-BKDllfL1.js";import{m as i,j as E}from"./Button-2qPWXf7R.js";import{T as _}from"./Typography-Br6reEa4.js";import{B as r}from"./Box-BmeHL9xr.js";import"./index-Dl6G-zuu.js";import"./index-Bm4I-j5O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B65QLLQ5.js";import"./useOnHover-DcG81d-b.js";import"./testIds-CT2jQqrK.js";import"./Tooltip-C_Tls1Mb.js";import"./index-DL8WKete.js";import"./index-CYSaZ1-Z.js";import"./useEnhancedEffect-DZnfS5Iy.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-HZ0X4aoe.js";import"./inheritsLoose-B7h9gheN.js";import"./Stack-CThqDOCM.js";import"./styled-DOXbsImH.js";import"./index-C3QW2DIj.js";import"./Typography-BoXyf5oC.js";import"./palette-DMXrs0tI.js";import"./ThemeWrapper-bDRlVNa7.js";import"./GlobalStyles-TexeS-Y5.js";import"./DatePicker-ClnZxlh6.js";import"./index-Beu9b4Vr.js";import"./Typography-Cn8xeiu4.js";import"./createSvgIcon-KZc-bwgI.js";import"./ButtonBase-oX6lAsK9.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useCommonOnChangeHandler-BSRxhs-1.js";import"./useFormControl-EHw8eS4L.js";import"./Paper-DJ9cSgbz.js";import"./Checkbox-CTvvVB9F.js";import"./FormControlLabel-CMkWOaX8.js";import"./DateField-BQDLvCea.js";import"./DateRangeField-CaZuCD_w.js";import"./FileDropZone-BR12Sm9I.js";import"./Grid-6fRPV7AH.js";import"./Input-DFgCvLA-.js";import"./TextArea-B9sqycCQ.js";import"./ProgressBar-Qu8psmeY.js";import"./RadioButton.types-DvAbzWVW.js";const v=t=>{let a="[";const o=t[0],e=t[t.length-1];return o&&(a+=`{
      label: "${o.label}",
      value: "${o.value}",
    },
`),e&&(a+=`    ...
`,a+=`    {
      label: "${e.label}",
      value: "${e.value}",
    },
`),a+="  ]",a},Ae={title:"Example/Select/MultiSelect",component:i,parameters:{layout:"centered",docs:{source:{transform:m("MultiSelect",{map:{options:v}})}}},tags:["autodocs"],argTypes:{onChange:{action:"onChange"}}},l={args:{...i.defaultProps,label:"Multi Select",placeholder:"Select many options",helperText:"Select many options",tooltip:"Tooltip",value:["option1","option2","option3","option4"],options:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"},{label:"Option 5",value:"option5"},{label:"Option 6",value:"option6"},{label:"Option 7",value:"option7"},{label:"Option 8",value:"option8"},{label:"Option 9",value:"option9"},{label:"Option 10",value:"option10"},{label:"Option 11",value:"option11"},{label:"Option 12",value:"option12"}]}},p={args:{...l.args,ChipProps:{type:"positive",variant:"outlined"}}},G=`(option: any, { label, value }: any) => (
    <Box
      key={value}
      sx={{
        height: "40px",
        display: "flex",
        gap: "8px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Avatar text={option?.user} />
      {label}
    </Box>
  )`,s={parameters:{layout:"centered",docs:{source:{transform:m("MultiSelect",{map:{renderOption:G,options:v}})}}},render:t=>n.jsx(i,{...t,renderOption:(a,{label:o,value:e})=>n.jsxs(r,{sx:{height:"40px",display:"flex",gap:"8px",width:"100%",alignItems:"center"},children:[n.jsx(A,{text:a==null?void 0:a.user}),o]},e)}),args:{...i.defaultProps,...l.args,label:"Custom Option Renderer",options:[{user:"JD",label:"Option 1",value:"option1"},{user:"CD",label:"Option 2",value:"option2"},{user:"MZ",label:"Option 3",value:"option3"},{user:"KN",label:"Option 4",value:"option4"},{user:"SE",label:"Option 5",value:"option5"}],renderOption:()=>n.jsx(n.Fragment,{})}},H=`(value: string[], selectedOptions: any[]) => (
    <OverflowRowCounter>
      {selectedOptions?.map((opt: any) => (
        <Icon key={opt?.icon} icon={opt?.icon} />
      ))}
    </OverflowRowCounter>
  )`,u={parameters:{layout:"centered",docs:{source:{transform:m("MultiSelect",{map:{renderValue:H,options:v}})}}},render:t=>n.jsx(i,{...t,renderValue:(a,o)=>n.jsx(E,{children:o==null?void 0:o.map(e=>n.jsx(k,{icon:e==null?void 0:e.icon},e==null?void 0:e.icon))})}),args:{...i.defaultProps,id:"Select",label:"Custom Option Renderer",placeholder:"Placeholder",labelPosition:"top",value:["option1","option2","option3","option4","option5","option6","option7"],options:[{icon:"HappyEmoji",label:"Option 1",value:"option1"},{icon:"SadEmoji",label:"Option 2",value:"option2"},{icon:"Hammer",label:"Option 3",value:"option3"},{icon:"Star",label:"Option 4",value:"option4"},{icon:"Heart",label:"Option 5",value:"option5"},{icon:"User",label:"Option 6",value:"option6"},{icon:"ToolsV2",label:"Option 7",value:"option7"}],renderValue:()=>n.jsx(n.Fragment,{})}},d={render:t=>n.jsx(r,{sx:{height:"100px",width:"300px"},children:n.jsx(i,{...t})}),args:{...l.args,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12"],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Placeholder",labelPosition:"top",variant:"table",wrap:!0}},I=`(_, selectedOptions: any) => {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 0 }}>
          <Typography preventTextSelection variant="bodyR">
            Status
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <OverflowRowCounter counterPosition="left">
            {selectedOptions?.map((opt: any) => (
              <Chip
                key={opt?.value}
                type={opt?.status}
                text={opt?.label}
              />
            ))}
          </OverflowRowCounter>
        </Box>
      </Box>
    );
  }`,c={parameters:{layout:"centered",docs:{source:{transform:m("MultiSelect",{map:{renderValue:I,options:v}})}}},render:t=>n.jsx(r,{sx:{height:"100px",width:"300px"},children:n.jsx(i,{...t,renderValue:(a,o)=>n.jsxs(r,{sx:{display:"flex",gap:"8px",overflow:"hidden",width:"100%"},children:[n.jsx(r,{sx:{flexGrow:0},children:n.jsx(_,{preventTextSelection:!0,variant:"bodyR",children:"Status"})}),n.jsx(r,{sx:{flexGrow:1,width:"100%",overflow:"hidden",position:"relative"},children:n.jsx(E,{counterPosition:"left",children:o==null?void 0:o.map(e=>n.jsx(D,{type:e==null?void 0:e.status,text:e==null?void 0:e.label},e==null?void 0:e.value))})})]})})}),args:{...l.args,value:["option1","option2","option3","option4","option5"],options:[{status:"positive",label:"Option 1",value:"option1"},{status:"negative",icon:"SadEmoji",label:"Option 2",value:"option2"},{status:"warning",label:"Option 3",value:"option3"},{status:"pending",label:"Option 4",value:"option4"},{status:"neutral",label:"Option 5",value:"option5"},{status:"positive",label:"Option 6",value:"option6"},{status:"negative",label:"Option 7",value:"option7"}],fullWidth:!0,id:"Select",label:"",helperText:"",placeholder:"Status",labelPosition:"top",renderValue:()=>n.jsx(n.Fragment,{})}};var x,b,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...MultiSelect.defaultProps,
    label: "Multi Select",
    placeholder: "Select many options",
    helperText: "Select many options",
    tooltip: "Tooltip",
    value: ["option1", "option2", "option3", "option4"],
    options: [{
      label: "Option 1",
      value: "option1"
    }, {
      label: "Option 2",
      value: "option2"
    }, {
      label: "Option 3",
      value: "option3"
    }, {
      label: "Option 4",
      value: "option4"
    }, {
      label: "Option 5",
      value: "option5"
    }, {
      label: "Option 6",
      value: "option6"
    }, {
      label: "Option 7",
      value: "option7"
    }, {
      label: "Option 8",
      value: "option8"
    }, {
      label: "Option 9",
      value: "option9"
    }, {
      label: "Option 10",
      value: "option10"
    }, {
      label: "Option 11",
      value: "option11"
    }, {
      label: "Option 12",
      value: "option12"
    }]
  }
}`,...(O=(b=l.parameters)==null?void 0:b.docs)==null?void 0:O.source}}};var h,g,f;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    ChipProps: {
      type: "positive",
      variant: "outlined"
    }
  }
}`,...(f=(g=p.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,y,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderOption: RenderOptionCodeSample,
            options: renderFirstAndLastOptions
          }
        })
      }
    }
  },
  render: args => {
    return <MultiSelect {...args} renderOption={(option: any, {
      label,
      value
    }: any) => <Box key={value} sx={{
      height: "40px",
      display: "flex",
      gap: "8px",
      width: "100%",
      alignItems: "center"
    }}>
            <Avatar text={option?.user} />
            {label}
          </Box>} />;
  },
  args: {
    ...MultiSelect.defaultProps,
    ...Default.args,
    label: "Custom Option Renderer",
    options: [{
      user: "JD",
      label: "Option 1",
      value: "option1"
    }, {
      user: "CD",
      label: "Option 2",
      value: "option2"
    }, {
      user: "MZ",
      label: "Option 3",
      value: "option3"
    }, {
      user: "KN",
      label: "Option 4",
      value: "option4"
    }, {
      user: "SE",
      label: "Option 5",
      value: "option5"
    }],
    renderOption: () => <></>
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var C,j,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: RenderValueCodeSample,
            options: renderFirstAndLastOptions
          }
        })
      }
    }
  },
  render: args => {
    return <MultiSelect {...args} renderValue={(_, selectedOptions: any) => {
      return <OverflowRowCounter>
              {selectedOptions?.map((opt: any) => <Icon key={opt?.icon} icon={opt?.icon} />)}
            </OverflowRowCounter>;
    }} />;
  },
  args: {
    ...MultiSelect.defaultProps,
    id: "Select",
    label: "Custom Option Renderer",
    placeholder: "Placeholder",
    labelPosition: "top",
    value: ["option1", "option2", "option3", "option4", "option5", "option6", "option7"],
    options: [{
      icon: "HappyEmoji",
      label: "Option 1",
      value: "option1"
    }, {
      icon: "SadEmoji",
      label: "Option 2",
      value: "option2"
    }, {
      icon: "Hammer",
      label: "Option 3",
      value: "option3"
    }, {
      icon: "Star",
      label: "Option 4",
      value: "option4"
    }, {
      icon: "Heart",
      label: "Option 5",
      value: "option5"
    }, {
      icon: "User",
      label: "Option 6",
      value: "option6"
    }, {
      icon: "ToolsV2",
      label: "Option 7",
      value: "option7"
    }],
    renderValue: () => <></>
  }
}`,...(R=(j=u.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var T,B,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
    // backgroundColor: "rgba(255, 0, 255, 0.1)",
  }}>
      <MultiSelect {...args} />
    </Box>,
  args: {
    ...Default.args,
    value: ["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8", "option9", "option10", "option11", "option12"],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Placeholder",
    labelPosition: "top",
    variant: "table",
    wrap: true
  }
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var M,V,F;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: "centered",
    docs: {
      source: {
        transform: sourceCodeFormatter("MultiSelect", {
          map: {
            renderValue: StatusFilterCodeSample,
            options: renderFirstAndLastOptions
          }
        })
      }
    }
  },
  render: args => <Box sx={{
    height: "100px",
    width: "300px"
  }}>
      <MultiSelect {...args} renderValue={(_, selectedOptions: any) => {
      return <Box sx={{
        display: "flex",
        gap: "8px",
        overflow: "hidden",
        width: "100%"
      }}>
              <Box sx={{
          flexGrow: 0
        }}>
                <Typography preventTextSelection variant="bodyR">
                  Status
                </Typography>
              </Box>
              <Box sx={{
          flexGrow: 1,
          width: "100%",
          overflow: "hidden",
          position: "relative"
        }}>
                <OverflowRowCounter counterPosition="left">
                  {selectedOptions?.map((opt: any) => <Chip key={opt?.value} type={opt?.status} text={opt?.label} />)}
                </OverflowRowCounter>
              </Box>
            </Box>;
    }} />
    </Box>,
  args: {
    ...Default.args,
    value: ["option1", "option2", "option3", "option4", "option5"],
    options: [{
      status: "positive",
      label: "Option 1",
      value: "option1"
    }, {
      status: "negative",
      icon: "SadEmoji",
      label: "Option 2",
      value: "option2"
    }, {
      status: "warning",
      label: "Option 3",
      value: "option3"
    }, {
      status: "pending",
      label: "Option 4",
      value: "option4"
    }, {
      status: "neutral",
      label: "Option 5",
      value: "option5"
    }, {
      status: "positive",
      label: "Option 6",
      value: "option6"
    }, {
      status: "negative",
      label: "Option 7",
      value: "option7"
    }],
    fullWidth: true,
    id: "Select",
    label: "",
    helperText: "",
    placeholder: "Status",
    labelPosition: "top",
    renderValue: () => <></>
  }
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};const De=["Default","AlternativeChipType","CustomOptionRenderer","CustomValueRenderer","TableVariant","StatusFilter"];export{p as AlternativeChipType,s as CustomOptionRenderer,u as CustomValueRenderer,l as Default,c as StatusFilter,d as TableVariant,De as __namedExportsOrder,Ae as default};