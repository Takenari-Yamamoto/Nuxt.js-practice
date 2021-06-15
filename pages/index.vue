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
    <div class="post-list">
      <div class="post">
        <li v-for="(post, index) in posts" :key="index">
          <div class="post-user-image">
            <img src="../assets/profile_test.jpeg">
          </div>
          <nuxt-link :to="`/posts/${post.sys.id}`">
            <p class="username">Takenari.Y</p>
            <p class="date" v-html="getDate(post.sys.updatedAt)"></p>
            <p class="title">{{ post.fields.title }}</p>
          </nuxt-link>
        </li>
      </div>
		</div>
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
  date: {
    posts: []
  },
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
    console.log(entries.items);
  },
  methods: {
    getDate(date) {
      var date = new Date(date);
      console.log(date);
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDay();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var getDate =  year+"/"+month+"/"+day+" "+hours+":"+minutes;
      return getDate;
    },
  },
}

</script>