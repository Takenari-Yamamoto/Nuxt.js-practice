<template>
	<div>
		<Header />
		<main>
      <li v-for="(post, index) in posts" :key="index">
         <nuxt-link :to="`/posts/${post.sys.id}`">{{
           post.fields.title
         }}</nuxt-link>
       </li>
		</main>
	</div>
</template>
<script>
	
	export default {
		components: {
			Header,
		}
	};
</script>

<script>
import { createClient } from '~/plugins/contentful.js';
import Header from "@/components/header.vue"; // headerをインポート

const client = createClient()

export default {
  components: {
			Header,
	},
  async asyncData({ params }) {
    // 記事一覧を取得
    const entries = await client.getEntries({
      content_type: process.env.CTFL_CONTENT_TYPE_POST
    })
    return {
      posts: entries.items
    }
  }
}

</script>


