ORIG_IMG = '_orig_image.jpg'

NUM_PHOTOS = ARGV[0] ? ARGV[0].to_i : 55

NUM_PHOTOS.times do |n|
  `ln -s #{ ORIG_IMG } image-#{ n }.jpg`
end
