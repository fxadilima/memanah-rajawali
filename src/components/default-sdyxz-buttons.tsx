import { CollectionEntry } from "astro:content";

export function makeButtons(post: CollectionEntry<'sdyxz'>) {
    if (typeof(post.data.prevPage) !== 'undefined') {
        console.log(`makeButtons: ${post.data.prevPage}`);
        <a href={`/memanah-rajawali/${post.data.prevPage}`} 
        class="w3-bar-item w3-hover-black w3-round" 
        title="Go to previous page"><i class="fa fa-arrow-left"></i></a>
    }
    if (typeof(post.data.nextPage) !== 'undefined') {
        console.log(`makeButtons: ${post.data.nextPage}`);
        <a href={`/memanah-rajawali/${post.data.nextPage}`} 
            class="w3-bar-item w3-hover-black w3-round" 
            title="Go to next page"><i class="fa fa-arrow-right"></i></a>
    }
}
