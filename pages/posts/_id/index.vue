<template>
   <div>
      <Header />
      <section class="post-detail">
        <div class="image">
          <img src="profile_test.jpeg">
        </div>
        <p class="username">Takenari.Y</p>
        <p class="date">{{ post.fields.openedAt }}</p>
        <br>
        <h1 class="title">{{ post.fields.title }}</h1>
        <p class="content" v-html="toHtmlString(post.fields.body)"></p>
      </section>
   </div>
</template>
<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  async asyncData({ params, payload }) {
    // IDをキーに記事を取得
    const entry = await client.getEntry(params.id)
    return {
      post: entry
    }
  },
  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    },
    window:onload = function() {
      alert("tets")
    }
  },

}
</script>