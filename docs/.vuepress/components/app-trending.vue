<template>
  <section class="trending">
    <p class="loading" v-if="isLoading">
      <svg viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20" />
        <circle class="ball" cx="25" cy="5" r="3.5" />
      </svg>
    </p>
    <ul v-else class="trending-list">
      <li class="trending-list__item" v-for="repo of repos" :key="repo.url">
        <svg
          class="icon"
          viewBox="0 0 12 16"
          version="1.1"
          width="12"
          height="16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
          />
        </svg>
        <a class="link" :href="repo.url" target="_blank">{{ repo.author}} / {{ repo.name}}</a>
        <p class="desc">{{ repo.description }}</p>

        <p class="meta">
          <span class="meta-item">
            <span class="repo-language-color"></span>
            <span>{{ repo.language }}</span>
          </span>

          <span class="meta-item">
            <svg
              aria-label="star"
              class="octicon octicon-star"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
              />
            </svg>
            <span>{{ repo.stars }}</span>
          </span>

          <span class="meta-item">
            <svg
              aria-label="fork"
              class="octicon octicon-repo-forked"
              viewBox="0 0 10 16"
              version="1.1"
              width="10"
              height="16"
              role="img"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
              />
            </svg>

            <span>{{ repo.forks }}</span>
          </span>

          <span class="meta-item">
            <span>Built by</span>
            <span>
              <img
                class="avatar"
                v-for="builder of repo.builtBy"
                :key="builder.name"
                :src="builder.avatar"
              />
            </span>
          </span>
        </p>
      </li>
    </ul>
  </section>
</template>



<script>
import { fetchRepositories } from "@huchenme/github-trending";

export default {
  name: "AppTrending",
  mounted() {
    this.getTrendingRepos();
  },
  data() {
    return {
      isLoading: false,
      repos: []
    };
  },
  methods: {
    async getTrendingRepos(since = "daily") {
      this.isLoading = true;
      try {
        const result = await fetchRepositories({ language: "dart", since });
        this.repos = result;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    }
  }
};
</script>

<style>
.trending-list {
  list-style: none;
  padding: 0;
}
.trending-list__item {
  padding: 1rem 0;
}
.trending-list__item:not(:last-of-type) {
  margin-bottom: 1rem;
}

.icon {
  padding-right: 0.1em;
}

.link {
  font-size: 1.5rem;
}

.desc {
  margin: 4px 0;
}

.meta {
  margin: 0;
  font-size: 0.8em;
  display: flex;
  align-items: center;
}

.repo-language-color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #00b4ab;
}

.octicon {
  vertical-align: text-bottom;
}
.avatar {
  width: 20px;
  height: 20px;
  margin-right: 4px;
  border-radius: 3px;
  display: inline-block;
  line-height: 0;
  overflow: hidden;
  vertical-align: middle;
}

.meta-item {
  padding-right: 0.5em;
}

.loading {
  text-align: center;
  margin: 3rem 0;
}
.loading svg {
  width: 3.75em;
  animation: 1.5s spin ease infinite;
}

.loading .ring {
  fill: none;
  stroke: #1389fd;
  stroke-width: 2;
}

.loading .ball {
  fill: #0680fa;
  stroke: none;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
