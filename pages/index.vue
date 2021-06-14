<template>
	<div>
		<Header />
    <div class="bg-image">
        <img src="../assets/bg_image.jpeg">
      </div>
    <div class="user-profile">
      <div class="image">
        <img src="../assets/profile_test.jpeg">
      </div>
      <div class="text">
        <p class="username">Takenari.Y</p><br>
        22yo / 京都⇄大阪 / 象使い / バックパッカー / プログラミング勉強中 / 尖っていこう<br>
        13 フォロー 0 フォロワー
      </div>
    </div>
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


