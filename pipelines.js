function addPipeline() {
  // Adds a pipeline div to the content div

    var content = document.getElementById("container");

    // How many do we have already?
    var pipelineCount = content.querySelectorAll('.pipeline').length

    // Make a new one
    var newdiv = document.createElement("div");
    pipelineCount++;

    newdiv.setAttribute('id', 'pipeline-' + pipelineCount);
    newdiv.setAttribute('class', 'pipeline');

    // Add Title Anchor
    var title = document.createElement("a");
    title.setAttribute('class', 'pipeline-title');
    title.innerHTML = 'Pipeline #' + pipelineCount;
    newdiv.appendChild(title);

    // Add empty list for drag-n-drop blocks
    var ul = document.createElement("ul");
    newdiv.appendChild(ul);

    // Make Sortable work here
    new Sortable(newdiv, {
        group: {
            name: 'shared',
            draggable: ".block",
        },
        animation: 150
    });


    // Add to content
    content.appendChild(newdiv);

    // Set pipeline size.
    var allPipelines = content.querySelectorAll('.pipeline');
    // scale to 98% instead of 100% to account for borders
    pipelineWidth = 98 * (content.clientWidth / allPipelines.length) / content.clientWidth;
    for(var i = 0; i < allPipelines.length; i++){
       allPipelines[i].style.width = pipelineWidth + '%';
    }

}

//
// Blocks
//

var blocks = document.getElementById('blocks-list');
new Sortable(blocks, {
    group: {
        name: 'shared',
        pull: 'clone',
        put: false, // no edits allowed
    },
    animation: 150,
    sort: false, // no edits
});