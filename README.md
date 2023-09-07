Async Vs Defer

<script src=""/>
 
In normal html parsing goes on and once browser come in contact with script tag, it download that script and then it execute the downloaded script. After this the normal html parsing continue

<script async src=""/>

In this case, html parsing continue, and once browser sees script tag it fetch the script simulatanulsly while fetching. Once script fetching is done, it stop html parsing and execute downloaded script. After execution, it continue with html fetching.

<script defer src=""/>

In this case, html parsing continue and it fetches script parallely, it execute downloaded script only when html parsing is completed.

