google.books.load();

function initialize() {
  var viewer = new google.books.DefaultViewer(document.getElementById('viewer-canvas'));
  viewer.load('ISBN:9781551113210');
}

google.books.setOnLoadCallback(initialize);
