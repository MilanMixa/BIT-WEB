// Start with a blank HTML page
// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!
// When the gallery is created and visible on the page, create gallery title and
// insert it before the gallery images
// Go through gallery images and set a random size to each gallery image

// var $container = $("<div>");
// $container.prependTo("body");

// Bonus:
// Set a green border around each image whose width is less than 200px up
// until the first one that doesn't meet that requirement (i.e. when you get to
// the first img that is more than 200px wide, stop checking and setting green
// border).

$("body").prepend("<div>");


var $images = [
    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg", 

    "https://www.almanac.com/sites/default/files/image_nodes/celery-close-up-shutterstock_110543273.jpg", 

    "https://www.aces.edu/wp-content/uploads/2018/08/shutterstock_637387888-blueberries.jpg", 

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYzmVzWz5Ro1PeSZMZSR1C6q3Mk4zxA0zbA&usqp=CAU",

    "https://qph.fs.quoracdn.net/main-qimg-51781603839fd13333ef543f387ece22",

    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfOIKvZtg-ZFa2HI9p2mZCDmliX3utnN-scw&usqp=CAU"
];

$border = true;
$.each($images, function(index){
    var $size = Math.floor(400 * Math.random() + 100)
    var img = $("<img>").attr("src", $images[index]).css({
        "width": $size,
        "height": $size
    })
    $("div").append(img)

    if($size < 200 && $border) {
        img.css({
            "border": "5px solid green"
        })
        $border = false;
    }
    
})

$("div").prepend("<h1>Amazing Gallery</h1>").css({
    "text-align": "center",
    "color": "red"
})

