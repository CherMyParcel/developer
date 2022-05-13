import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("ApiLink", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/ApiLink.vue"))),
  app.component("AutoLink", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/AutoLink.vue"))),
  app.component("BaseInput", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/BaseInput.vue"))),
  app.component("CodeBlock", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/CodeBlock.vue"))),
  app.component("ContactForm", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/ContactForm.vue"))),
  app.component("Cta", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Cta.vue"))),
  app.component("DataType", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/DataType.vue"))),
  app.component("DataTypeDefinition", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/DataTypeDefinition.vue"))),
  app.component("DetailsExpand", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/DetailsExpand.vue"))),
  app.component("FormField", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/FormField.vue"))),
  app.component("FormInput", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/FormInput.vue"))),
  app.component("FormSelect", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/FormSelect.vue"))),
  app.component("FormTextArea", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/FormTextArea.vue"))),
  app.component("GitHubBadge", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/GitHubBadge.ts"))),
  app.component("Http", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Http.vue"))),
  app.component("Integration", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Integration.vue"))),
  app.component("MPImg", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/MPImg.vue"))),
  app.component("Markdown", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Markdown.vue"))),
  app.component("Message", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Message.vue"))),
  app.component("NpmBadge", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/NpmBadge.ts"))),
  app.component("PackagistBadge", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/PackagistBadge.ts"))),
  app.component("Shield", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Shield.ts"))),
  app.component("Stack", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/Stack.vue"))),
  app.component("TeamMember", defineAsyncComponent(() => import("/Users/edie/Sites/developer-portal/src/.vuepress/theme/client/components/global/TeamMember.vue"))),
  app.component("HomeLink", defineAsyncComponent(() => import("@mptheme/client/views/home/home-link/HomeLink.vue"))),
  app.component("HomePartnerBrand", defineAsyncComponent(() => import("@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue")))
}
