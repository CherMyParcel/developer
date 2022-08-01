import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as r,a as e,b as n,w as s,d as t,e as l,r as d}from"./app.bcb55c99.js";const c={},h=e("h3",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true",tabindex:"-1"},"#"),t(" Contributing")],-1),u=e("h4",{id:"_0-requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_0-requirements","aria-hidden":"true",tabindex:"-1"},"#"),t(" 0. Requirements")],-1),_=t("Node 16"),m=t("Yarn"),g=l(`<h4 id="_1-basics" tabindex="-1"><a class="header-anchor" href="#_1-basics" aria-hidden="true" tabindex="-1">#</a> 1. Basics</h4><ul><li>Fork this repository and clone it to your machine</li><li>Install dependencies using Yarn:<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span>
</code></pre></div></li></ul><h4 id="_2-make-your-changes" tabindex="-1"><a class="header-anchor" href="#_2-make-your-changes" aria-hidden="true" tabindex="-1">#</a> 2. Make your changes</h4><ul><li>Try to conform to our code style. Make sure to enable ESLint in your editor.</li><li>You should make only one change in each branch.</li></ul><h4 id="_3-add-or-update-tests" tabindex="-1"><a class="header-anchor" href="#_3-add-or-update-tests" aria-hidden="true" tabindex="-1">#</a> 3. Add or update tests</h4><p>Run tests with the following command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> run test:coverage
</code></pre></div><ul><li>Coverage % needs to be equal to or greater than that of the previous commit.</li><li>If you added a new file, the corresponding test(s) should go inside <code>&lt;filename&gt;.spec.ts</code> in the same directory.</li></ul><h4 id="_4-commit" tabindex="-1"><a class="header-anchor" href="#_4-commit" aria-hidden="true" tabindex="-1">#</a> 4. Commit</h4>`,9),p=t("Make as many commits as you'd like. We use "),b=t("Conventional Commits"),f=t(" and "),y=t("semantic-release"),x=t(" to simplify the process of releasing updates by automating release notes and changelogs based on the rules of "),v=t("@commitlint/config-conventional"),k=t("."),w=e("p",null,"Your branch will be squashed into one single valid commit before merging.",-1),q=e("h4",{id:"_5-create-a-pull-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-create-a-pull-request","aria-hidden":"true",tabindex:"-1"},"#"),t(" 5. Create a pull request")],-1),C=e("ul",null,[e("li",null,"Keep your pull requests focused on single subjects"),e("li",null,"Please explain what you changed and why"),e("li",null,"We will review your code and thoroughly test it before squashing and merging your pull request")],-1);function N(B,V){const a=d("AutoLink");return i(),r("div",null,[h,u,e("ul",null,[e("li",null,[n(a,{item:"https://nodejs.org/"},{default:s(()=>[_]),_:1})]),e("li",null,[n(a,{item:"https://classic.yarnpkg.com/"},{default:s(()=>[m]),_:1})])]),g,e("p",null,[p,n(a,{item:"https://www.conventionalcommits.org/en/v1.0.0/#summary"},{default:s(()=>[b]),_:1}),f,n(a,{item:"https://github.com/semantic-release/semantic-release"},{default:s(()=>[y]),_:1}),x,n(a,{item:"https://github.com/conventional-changelog/commitlint"},{default:s(()=>[v]),_:1}),k]),w,q,C])}var L=o(c,[["render",N],["__file","99.contributing.html.vue"]]);export{L as default};
