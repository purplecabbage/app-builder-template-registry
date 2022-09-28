"use strict";(self.webpackChunkapp_builder_template_registry=self.webpackChunkapp_builder_template_registry||[]).push([[644],{2304:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=a(7462),l=a(3366),r=(a(5007),a(4983)),m=a(1515),d=["components"],i={},p={_frontmatter:i},o=m.Z;function s(e){var t=e.components,a=(0,l.Z)(e,d);return(0,r.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"template-registry-api"},"Template Registry API"),(0,r.mdx)("h2",{id:"authentication"},"Authentication"),(0,r.mdx)("p",null,"A valid Adobe IMS access token is required for ",(0,r.mdx)("inlineCode",{parentName:"p"},"POST")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"DELETE")," actions."),(0,r.mdx)("h2",{id:"authorization"},"Authorization"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Admin: is a member of an Adobe IMS organization listed in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"ADMIN_IMS_ORGANIZATIONS")," environment variable",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"All API endpoints are available."),(0,r.mdx)("li",{parentName:"ul"},"Can manage all App Builder templates in Template Registry."))),(0,r.mdx)("li",{parentName:"ul"},"Developer: an authenticated Adobe customer",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"May add or search templates"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"DELETE")," action is unavailable")))),(0,r.mdx)("h2",{id:"summary-of-endpoints"},"Summary of Endpoints"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"/app-builder-template-registry/api/index.md"},"Swagger UI")," to see endpoint summaries, available methods, parameters, example values, models, and status codes, and to try out the API."),(0,r.mdx)("h4",{id:"base-url"},"Base URL"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Environment"),(0,r.mdx)("th",{parentName:"tr",align:null},"URL"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Prod"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://360030-templateregistryapi.adobeioruntime.net"},"https://360030-templateregistryapi.adobeioruntime.net"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Stage"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://360030-templateregistryapi-stage.adobeioruntime.net"},"https://360030-templateregistryapi-stage.adobeioruntime.net"))))),(0,r.mdx)("h4",{id:"endpoints"},"Endpoints"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Action"),(0,r.mdx)("th",{parentName:"tr",align:null},"Path"),(0,r.mdx)("th",{parentName:"tr",align:null},"HTTP status code"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Get list of templates"),(0,r.mdx)("td",{parentName:"tr",align:null},"GET"),(0,r.mdx)("td",{parentName:"tr",align:null},"/apis/v1/templates"),(0,r.mdx)("td",{parentName:"tr",align:null},"200, 400, 500, 503, 504")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Add template"),(0,r.mdx)("td",{parentName:"tr",align:null},"POST"),(0,r.mdx)("td",{parentName:"tr",align:null},"/apis/v1/templates"),(0,r.mdx)("td",{parentName:"tr",align:null},"200, 400, 401, 403, 409, 500, 503, 504")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Delete tempalate"),(0,r.mdx)("td",{parentName:"tr",align:null},"DELETE"),(0,r.mdx)("td",{parentName:"tr",align:null},"/apis/v1/templates/{template-name}"),(0,r.mdx)("td",{parentName:"tr",align:null},"200, 400, 401, 403, 404, 500, 503, 504")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Retrieve template by name"),(0,r.mdx)("td",{parentName:"tr",align:null},"GET"),(0,r.mdx)("td",{parentName:"tr",align:null},"/apis/v1/templates/{template-name}"),(0,r.mdx)("td",{parentName:"tr",align:null},"200, 400, 404, 500, 503, 504")))),(0,r.mdx)("h3",{id:"search--filtering"},"Search & Filtering"),(0,r.mdx)("h4",{id:"search"},"Search"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET /apis/v1/templates")," endpoint supports search for templates using the following query parameters:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"names")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template names.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"categories")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template categories.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"statuses")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template statuses (TEMPLATE_STATUS_IN_VERIFICATION, TEMPLATE_STATUS_APPROVED, TEMPLATE_STATUS_REJECTED).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"apis")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template APIs. Supports EMPTY and ANY filters.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"extensions")),(0,r.mdx)("td",{parentName:"tr",align:null},"list of strings"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template extension points. Supports EMPTY and ANY filters.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"events")),(0,r.mdx)("td",{parentName:"tr",align:null},"EMPTY and ANY filters only"),(0,r.mdx)("td",{parentName:"tr",align:null},"Filter by template events. For now supports EMPTY and ANY filters only.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"runtime")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Is Adobe I/O Runtime required or not? Supports EMPTY and ANY filters.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"adobeRecommended")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates templates featured by Adobe.")))),(0,r.mdx)("h4",{id:"filtering"},"Filtering"),(0,r.mdx)("p",null,"Additionaly, the following filtering operators are supported:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Filter Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"EMPTY (NONE)"),(0,r.mdx)("td",{parentName:"tr",align:null},"'', an empty string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns all templates that don't have a property set.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"ANY"),(0,r.mdx)("td",{parentName:"tr",align:null},"*, an asterisk symbol"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns all templates that have a property set.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"NOT"),(0,r.mdx)("td",{parentName:"tr",align:null},"!, an exclamation point symbol"),(0,r.mdx)("td",{parentName:"tr",align:null},"Excludes all templates which contain the negated query parameter value.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"OR"),(0,r.mdx)("td",{parentName:"tr",align:null},"|",", a pipe symbol"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array filters, e.g.: ",(0,r.mdx)("inlineCode",{parentName:"td"},"categories"),', default to returning the intersection (AND) of all matching templates. This filter operator adds the ability to specify a logical "OR" for individual values.')))),(0,r.mdx)("p",null,"By default, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"GET /apis/v1/templates")," endpoint returns templates that match all of the specified criteria, implicitly ",(0,r.mdx)("inlineCode",{parentName:"p"},"AND"),"ing all the terms of the search. For example, if you specify ",(0,r.mdx)("inlineCode",{parentName:"p"},"names")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"categories")," query parameters, the endpoint returns templates that match both criteria. If you want to return templates that match any of the specified criteria, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"OR")," filter operator. This will group all the ",(0,r.mdx)("inlineCode",{parentName:"p"},"OR"),"ed values and evalute them first, then ",(0,r.mdx)("inlineCode",{parentName:"p"},"AND")," the results with the rest of the query parameters."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-api-index-md-114c507ef2324662fa39.js.map