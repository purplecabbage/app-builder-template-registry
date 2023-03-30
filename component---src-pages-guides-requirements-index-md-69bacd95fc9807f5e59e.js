"use strict";(self.webpackChunkapp_builder_template_registry=self.webpackChunkapp_builder_template_registry||[]).push([[13],{53802:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=a(87462),d=a(63366),l=(a(15007),a(64983)),r=a(91515),m=["components"],i={},p={_frontmatter:i},o=r.Z;function s(e){var t=e.components,a=(0,d.Z)(e,m);return(0,l.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"app-builder-template-requirements"},"App Builder Template Requirements"),(0,l.mdx)("p",null,"To be considered a valid App Builder template, the template must meet the following requirements:"),(0,l.mdx)("h2",{id:"requirements"},"Requirements"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Template must be an NPM package published to the ",(0,l.mdx)("a",{parentName:"li",href:"https://npmjs.com/"},"NPM registry"),"."),(0,l.mdx)("li",{parentName:"ul"},"Template source code must be available in a public Github repository.")),(0,l.mdx)("h3",{id:"packagejson"},"package.json"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"description")),(0,l.mdx)("td",{parentName:"tr",align:null},"Template must have a description"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"keywords")),(0,l.mdx)("td",{parentName:"tr",align:null},"Must contain a keyword ",(0,l.mdx)("inlineCode",{parentName:"td"},"aio-app-builder-template")),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes")))),(0,l.mdx)("h4",{id:"example"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "description": "This is a description."\n  "keywords": [\n    "keyword1",\n    "keyword2",\n    "aio-app-builder-template"\n  ]\n}\n')),(0,l.mdx)("h3",{id:"installyml"},"install.yml"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Field"),(0,l.mdx)("th",{parentName:"tr",align:null},"Type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Required"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"$schema")),(0,l.mdx)("td",{parentName:"tr",align:null},"URI"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"This should be one of the versioned schema values of JSON schema (e.g. ",(0,l.mdx)("a",{parentName:"td",href:"http://json-schema.org/draft-07/schema"},"http://json-schema.org/draft-07/schema"),")")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"$id")),(0,l.mdx)("td",{parentName:"tr",align:null},"URI"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"This is a versioning property of this schema.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"categories")),(0,l.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,l.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,l.mdx)("td",{parentName:"tr",align:null},"The template must define at least one category. Valid categories are action, ui, graphql-mesh, ci-cd, and events.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"extensions")),(0,l.mdx)("td",{parentName:"tr",align:null},"list of objects"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},'List extension points that a template implements. Each extension point must specify the string property "extensionPointId".')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"env")),(0,l.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Optional environment variables that may be defined in ",(0,l.mdx)("strong",{parentName:"td"},"install.yml")," in place of interactive input")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"workspaces")),(0,l.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"List of workspace names required to be created in the App Builder project. Runtime namespaces are added by default for each workspace if the runtime property is set to true. If Staging and Production workspaces are not listed, they are added by default. If the workspaces property is omitted from ",(0,l.mdx)("strong",{parentName:"td"},"install.yml")," and at least one service is defined by the ",(0,l.mdx)("inlineCode",{parentName:"td"},"apis")," property, the Staging and Production workspaces will be implicitly added.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"apis")),(0,l.mdx)("td",{parentName:"tr",align:null},"list of objects"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"List the APIs required to be added to all Workspaces in the App Builder Project, if they don't exist. Each API object must contain ",(0,l.mdx)("inlineCode",{parentName:"td"},"code")," as one of its properties, which specifies the SDK code of the service.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"event")),(0,l.mdx)("td",{parentName:"tr",align:null},"object"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"This will list the event configuration for the template. The object's only top-level valid properties are ",(0,l.mdx)("inlineCode",{parentName:"td"},"consumer")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"provider"),". The event template code that contains this specification may read this to configure itself.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"runtime")),(0,l.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,l.mdx)("td",{parentName:"tr",align:null},"No"),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to add Runtime to App Builder application or not. Defaults to ",(0,l.mdx)("inlineCode",{parentName:"td"},"false"),".")))),(0,l.mdx)("h4",{id:"example-1"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yaml"},"# This is an App Builder install configuration\n# This file will exist in the root of the package as install.yml\n\n$schema: http://json-schema.org/draft-07/schema\n$id: https://adobe.io/schemas/app-builder-templates/1\n categories:\n    - code\n    - ui\nextensions:\n- extensionPointId: dx/excshell/1\nenv:\n  - SOMEKEY\nworkspaces:\n  - Staging\n  - Production\n  - Development\napis:\n- code: AnalyticsSDK \n- code: CampaignStandard\n- code: Mesh \nruntime: true\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-requirements-index-md-69bacd95fc9807f5e59e.js.map