const data = {
  data: {
    meta: {
      title: 'About Me | Ryo Ikarashi',
      desc: '五十嵐諒 / 京都を拠点にウェブサイト/WEBアプリケーションのデザイン・開発を行うフリーランスのエンジニア兼デザイナー',
      og: {
        title: 'About Me | Ryo Ikarashi',
        desc: '五十嵐諒 / 京都を拠点にウェブサイト/WEBアプリケーションのデザイン・開発を行うフリーランスのエンジニア兼デザイナー',
        type: 'website',
        url: 'https://ryoikarashi.com',
        image: '../assets/ryoikarashi-ogp.png',
        site_name: 'About Ryo Ikarashi (五十嵐諒)',
        fb: {
          app_id: '561741473987172',
          page_url: 'https://www.facebook.com/ry0ikarash1',
        },
        twitter: {
          card: 'summary_large_image',
          site: '@ryo_ikarashi',
          image: '../assets/twitter-summary-card.png',
        },
      },
    },
    footer: {
      sns: [
        {
          url: 'https://twitter.com/ryo_ikarashi',
          classname: 'twitter'
        },
        {
          url: 'https://facebook.com/ry0ikarash1',
          classname: 'facebook'
        },
        {
          url: 'https://instagram.com/ryo_ikarashi',
          classname: 'instagram'
        },
        {
          url: 'https://github.com/RyoIkarashi',
          classname: 'github'
        },
      ],
      copy: 'Copyright©2018 Ryo Ikarashi. All Rights Reserved.',
    },
    pages: {
      top: {
        prof: {
          name: 'Ryo Ikarashi (五十嵐 諒)',
          image: '../assets/prof.jpg',
          desc: '京都を拠点にウェブサイト/WEBアプリケーションのデザイン・開発を行うフリーランスのエンジニア兼デザイナー',
        },
        resume: [
          {
            term: {
              begin: '2014/03',
              end: '2014/10'
            },
            name: '株式会社 Ednity',
            url: 'https://ednity.com',
            tech: ['JavaScript', 'AngularJS', 'WebSocket', 'PHP', 'CakePHP', 'Ruby on Rails', 'Mysql','SASS', 'CSS3', 'HTML5', 'Nginx', 'Apache', 'AWS'],
            desc: "教育機関向けチャットアプリケーションの作成。主にフロントエンド全般を担当。PHPやRailsでのサーバーサイドの実装も部分的に担当。",
          },
          {
            term: {
              begin: '2014/11',
              end: '2015/07'
            },
            name: '株式会社 エックスポイントワン',
            url: 'http://x-point-1.net',
            tech: ['JavaScript', 'WebSocket', 'PHP', 'Symfony', 'Ruby on Rails', 'Mysql','SASS', 'CSS3', 'HTML5', 'Nginx', 'Apache'],
            desc: "企業ウェブサイト/ウェブアプリケーションの制作。主にフロントエンド/サーバーサイドの両方を担当。",
          },
          {
            term: {
              begin: '2015/08',
              end: 'now'
            },
            name: 'フリーランスプログラマー兼デザイナー',
            url: 'https://ryoikarashi.com',
            sites: [
              {
                name: '一般社団法人アーツシード京都',
                tech: ['WordPress', 'PHP', 'Mysql', 'JavaScript', 'Webpack', 'ES6/7', 'PostCSS', 'Nginx', 'Docker', '寄付の決済周りの実装'],
                url: 'https://askyoto.or.jp',
              },
              {
                name: 'Anna Matsumoto ポートフォリオサイト',
                tech: ['WordPress', 'PHP', 'Mysql', 'JavaScript', 'Webpack', 'ES6/7', 'PostCSS', 'ReactJS', 'Redux', 'SPA', 'Nginx', 'Docker'],
                url: 'https://annamatsumoto.com',
              },
              {
                name: '株式会社Panbanisha',
                tech: ['WordPress', 'PHP', 'Mysql', 'JavaScript', 'Browserify', 'ES6/7, SPA', 'SASS', 'Nginx', 'Docker'],
                url: 'http://panbanisha.com',
              },
              {
                name: 'Chris Wang ポートフォリオウェブサイト',
                tech: ['JavaScript', 'ES6/7', 'Webpack', 'PostCSS', 'Nginx', 'Docker'],
                url: 'http://madebymunki.com',
              },
            ],
            desc: "主に企業やアーティスト等のウェブサイト製作。デザインからコーディングまでを担当。",
          },

        ],
        projects: [
          {
            name: 'bitbar-bibance-price-viewer',
            url: 'https://github.com/RyoIkarashi/bitbar-bibance-price-viewer'
          },
          {
            name: 'zaif-price-viewer',
            url: 'https://github.com/RyoIkarashi/zaif-price-viewer'
          },
          {
            name: 'coincheck-price-viewer',
            url: 'https://github.com/RyoIkarashi/coincheck-price-viewer'
          },
          {
            name: 'egghead-dl',
            url: 'https://github.com/RyoIkarashi/egghead-dl'
          },
          {
            name: 'tutsplus-dl',
            url: 'https://github.com/RyoIkarashi/tutsplus-dl'
          },
          {
            name: 'postcss-dynamic-custom-properties',
            url: 'https://github.com/RyoIkarashi/postcss-dynamic-custom-properties'
          },
        ],
      },
    },
  },
};

export default data;
