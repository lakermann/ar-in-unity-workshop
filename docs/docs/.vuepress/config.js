module.exports = {
  title: 'AR with Unity',
  description: 'Unity & Vuforia Hands-on Workshop',
  base: '/ar-with-unity-workshop/',
  themeConfig: {
    repo: 'lakermann/ar-with-unity-workshop',
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/',
          'unity',
          'vuforia',
          'scene',
          'scripts',
          'build-app'
        ]
      }
    ]
  }
}
