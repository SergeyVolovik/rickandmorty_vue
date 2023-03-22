module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /(^bg-|^text-|^w-|^h-|^border-)/
    }
  ],
  theme: {
    extend: {
      spacing: {
        18: '4.75rem'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last']
    }
  },
  plugins: []
};
