// Applies the stored colour theme before first paint to avoid a flash of the wrong theme.
(function () {
  try {
    var t = localStorage.getItem('theme')
    if (t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    }
  } catch (e) {}
})()
