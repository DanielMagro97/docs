(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{224:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"prerequisites-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-guide"}},[e._v("#")]),e._v(" Prerequisites Guide")]),e._v(" "),s("h2",{attrs:{id:"installing-using-oasis-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-using-oasis-node"}},[e._v("#")]),e._v(" Installing/Using oasis-node")]),e._v(" "),s("p",[e._v("Any time the "),s("code",[e._v("oasis-node")]),e._v(" binary is referenced, we are referring to the binary\nthat is created from the "),s("a",{attrs:{href:"https://github.com/oasislabs/oasis-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oasis Core"),s("OutboundLink")],1),e._v("\nrepository's "),s("code",[e._v("go/")]),e._v(" path. This binary contains both the logic for running an\nOasis node and also provides a CLI for handling registry and staking\noperations.")]),e._v(" "),s("h3",{attrs:{id:"building-from-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source"}},[e._v("#")]),e._v(" Building from source")]),e._v(" "),s("p",[e._v("Although highly suggested, building from source is currently beyond the scope\nof this documentation. See "),s("a",{attrs:{href:"https://github.com/oasislabs/oasis-core#developing-and-building-the-system",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oasis Core's building instructions"),s("OutboundLink")],1),e._v(" for\ndetails.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("The code in the "),s("a",{attrs:{href:"https://github.com/oasislabs/oasis-core/tree/master/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("master")]),e._v(" branch"),s("OutboundLink")],1),e._v(" might be incompatible with the code used by\nother Nodes in the Public Testnet.")]),e._v(" "),s("p",[e._v("Make sure to use the version specified in the "),s("router-link",{attrs:{to:"/operators/current-testnet-parameters.html"}},[e._v("Current Testnet Parameters")]),e._v(".")],1)]),e._v(" "),s("h3",{attrs:{id:"using-inside-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-inside-docker"}},[e._v("#")]),e._v(" Using inside Docker")]),e._v(" "),s("p",[e._v("For those that wish to use the Oasis-provided Docker image, the "),s("code",[e._v("oasis-node")]),e._v("\nbinary can be found inside the "),s("a",{attrs:{href:"https://hub.docker.com/r/oasislabs/oasis-node",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis-node"),s("OutboundLink")],1),e._v(" Docker image.")]),e._v(" "),s("p",[e._v("To start a Docker container from this image, set the appropriate version by\nreplacing "),s("code",[e._v("<DOCKER-IMAGE-VERSION>")]),e._v(" with the version specified in the "),s("router-link",{attrs:{to:"/operators/current-testnet-parameters.html"}},[e._v("Current\nTestnet Parameters")]),e._v(" and run:")],1),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VERSION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("DOCKER-IMAGE-VERSION"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\ndocker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --entrypoint /bin/bash "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --volume "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(":/workdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --workdir /workdir "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  oasislabs/oasis-node:"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$VERSION")]),e._v("\n")])])]),s("p",[e._v("This invocation will set "),s("code",[e._v("/workdir")]),e._v(" in the Docker container to the current\nworking directory of the host.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("It is up to you to set this working directory correctly.\nIf there are any strange errors, this is a common source of problems.")])]),e._v(" "),s("p",[e._v("Inside the container, you can use the "),s("code",[e._v("oasis-node")]),e._v(" command as you would\nlocally on your host.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("While the "),s("code",[e._v("latest")]),e._v(" tag is available for the "),s("code",[e._v("oasis-node")]),e._v(" Docker image, we\nsuggest using the tag specified in the "),s("router-link",{attrs:{to:"/operators/current-testnet-parameters.html"}},[e._v("Current Testnet Parameters")]),e._v(" of\nthe form "),s("code",[e._v("master-YYYYMMDDHHMMSS")]),e._v(" to ensure that your node is compatible in case\nthe "),s("code",[e._v("latest")]),e._v(" tag doesn't match the tag specified in the "),s("router-link",{attrs:{to:"/operators/current-testnet-parameters.html"}},[e._v("Current Testnet\nParameters")]),e._v(".")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);