"use strict";(self.webpackChunkapp_builder_template_registry_documentation=self.webpackChunkapp_builder_template_registry_documentation||[]).push([[853],{13473:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return s}});var n=a(87462),r=a(63366),i=(a(15007),a(64983)),o=a(91515),l=["components"],m={},p={_frontmatter:m},d=o.Z;function s(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.mdx)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"creating-an-app-builder-template"},"Creating an App Builder Template"),(0,i.mdx)("h2",{id:"what-is-an-app-builder-template"},"What is an App Builder template?"),(0,i.mdx)("p",null,"An Adobe Developer App Builder template is a collection of code and configuration that can be used to bootstrap an App Builder application. Your template, written in Yeoman, will run code that can install and edit files for an App Builder app. A template is also a separate npm package. The install.yml file will include directives that will further configure the workspaces, and APIs that are needed for your template."),(0,i.mdx)("h2",{id:"bootstrapping-a-new-app-builder-template"},"Bootstrapping a new App Builder template"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install NodeJS 14 or higher."),(0,i.mdx)("li",{parentName:"ol"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm create @adobe/aio-app-template <template_name>")," (supplying the desired name of your template where <template_name> is)."),(0,i.mdx)("li",{parentName:"ol"},"Change directory into the created folder, and edit the files below.")),(0,i.mdx)("h3",{id:"installyml"},"install.yml"),(0,i.mdx)("p",null,"See the specification for a valid ",(0,i.mdx)("strong",{parentName:"p"},"install.yml")," file ",(0,i.mdx)("a",{parentName:"p",href:"requirements/#installyml"},"here"),"."),(0,i.mdx)("p",null,"Set the following keys to the desired values. When a template is installed, these keys will be parsed to set up the App Builder project. "),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"categories"),": used to filter for templates that can be installed"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"apis"),": list of APIs that need to be installed into the project to support the template's usage"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"workspaces"),": list of workspaces that should be created in the project"),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"runtime"),": indicates whether Adobe IO Runtime should be added to the project")),(0,i.mdx)("h3",{id:"srcindexjs"},"src/index.js"),(0,i.mdx)("p",null,"When your template is installed, it will run the Yeoman generator at src/index.js. When run, the current working directory will be the root path of the App Builder app."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If you are creating an Action template, use ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-action-generic"},"this template")," as a reference. ",(0,i.mdx)("a",{parentName:"li",href:"(https://github.com/adobe/generator-app-common-lib/blob/main/lib/constants.js)"},"Common constants")," (e.g. API service codes) can also be found in the template.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This leverages ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-app-common-lib/blob/main/lib/constants.js"},"this library")," and overrides the base ActionGenerator."),(0,i.mdx)("li",{parentName:"ul"},"See the ",(0,i.mdx)("inlineCode",{parentName:"li"},"writing()")," ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-action-generic/blob/main/index.js#L49"},"method")," on how to configure the action."))),(0,i.mdx)("li",{parentName:"ul"},"Try to modularize your code into several generators, if possible."),(0,i.mdx)("li",{parentName:"ul"},"Use composition to assemble different generators together. For example, the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-app-excshell"},"app-excshell generator")," uses these two generators:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-action-generic"},"add-action-generic")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-web-assets-exc-react"},"add-web-assets-exc-react")))),(0,i.mdx)("li",{parentName:"ul"},"To compose another generator in your generator, see ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-app-excshell/blob/3a26cfcbea52b7d11f632fbb1f340f90b6633be3/index.js#L50"},"here"),"."),(0,i.mdx)("li",{parentName:"ul"},"The aio-cli app plugin will pass these options to your generator, which may or may not apply to your generator:",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"skip-prompt")," (boolean). If set to true, skip any interactive prompts and apply defaults."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"force")," (boolean). If set to true, when prompting to overwrite files, automatically overwrite them."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"skip-install")," (boolean). If set to true, then yeoman will skip installing dependencies in package.json after the generator is run."))),(0,i.mdx)("li",{parentName:"ul"},"When your generator is run, it will be run with the current working directory as the root of the project it is installed in (you can access this as ",(0,i.mdx)("strong",{parentName:"li"},"this.destinationPath()")," in the generator class)."),(0,i.mdx)("li",{parentName:"ul"},"See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-web-assets-exc-react/blob/93bf59d9207cb5a9417d8fbd4fc81082afad7502/index.js#L33"},"here")," for how to write files and add dependencies to package.json."),(0,i.mdx)("li",{parentName:"ul"},"Make sure you understand the Yeoman Run Context for the different method priorities: ",(0,i.mdx)("a",{parentName:"li",href:"https://yeoman.io/authoring/running-context.html"},"https://yeoman.io/authoring/running-context.html")),(0,i.mdx)("li",{parentName:"ul"},"See ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-web-assets-exc-react/blob/main/test/index.test.js"},"here")," for writing unit tests for your generator")),(0,i.mdx)("h2",{id:"testing-your-template"},"Testing Your Template"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm test")," to run unit tests located in the ",(0,i.mdx)("strong",{parentName:"li"},"test")," folder. The unit tests use Jest."),(0,i.mdx)("li",{parentName:"ul"},"Run ",(0,i.mdx)("inlineCode",{parentName:"li"},"npm run e2e")," to run the template generator itself. This will create a sub-folder called ",(0,i.mdx)("strong",{parentName:"li"},"temp-template-test"),", and the generator will be run within it. ")),(0,i.mdx)("h2",{id:"what-next"},"What next?"),(0,i.mdx)("p",null,"If you'd like to submit the template to Template Registry, publish the module to NPM. Then, submit it for review via any of the methods in Contributing to Template Registry."),(0,i.mdx)("h2",{id:"sample-templates"},"Sample Templates"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-add-action-generic"},"https://github.com/adobe/generator-add-action-generic")," (action generator)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-app-excshell"},"https://github.com/adobe/generator-app-excshell")," (Experience Cloud Shell extension)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/generator-app-asset-compute"},"https://github.com/adobe/generator-app-asset-compute")," (Asset Compute extension)")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-creating-template-index-md-2eb43d063500f9dcd87d.js.map