ORIG_IMG = '_orig_image.jpg'

NUM_PHOTOS = ARGV[0] ? ARGV[0].to_i : 55

ONE_MINUTE = 60 * 1 # seconds, not milliseconds

NUM_PHOTOS.times do |n|
  `ln -s #{ ORIG_IMG } motion-#{ n * ONE_MINUTE }.jpg`
end
