import { defineConfig } from 'rspress/config';

export default defineConfig({
  // 文档根目录
  root: "docs",
  title: "常青开发者文档中心",
  themeConfig: {
    footer: {
      message: '© 2024 MindPool Team. All Rights Reserved.',
    },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/mindpool/evergreen-online-judge/' },
    ],
  }
});
