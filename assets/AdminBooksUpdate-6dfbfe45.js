import{_ as f,h,u as k,r as p,i as y,e as u,a as g,c as B,b as o,g as n,v as l,w as I,p as x,f as U}from"./index-22051e19.js";const r=i=>(x("data-v-0aab58d1"),i=i(),U(),i),w={class:"admin-books-update"},D=r(()=>o("h1",{class:"form-title text-center"},"Update Book",-1)),A=["onSubmit"],S={class:"form-group"},E=r(()=>o("label",{for:"title"},"Title",-1)),V={class:"form-group"},q=r(()=>o("label",{for:"author_id"},"Author ID",-1)),R={class:"form-group"},M=r(()=>o("label",{for:"releaseDate"},"Release Date",-1)),N={class:"form-group"},T=r(()=>o("label",{for:"coverImage"},"Cover Image URL",-1)),j=r(()=>o("button",{type:"submit",class:"btn btn-primary"},"Update Book",-1)),C={__name:"AdminBooksUpdate",setup(i){const _=h(),c=k(),m=p(_.params.id),t=p({title:"",author_id:"",releaseDate:"",cover_image:""}),d=`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${m.value}`;y(async()=>{try{const a=await u.get(d);a.status===200&&(t.value={...a.data,author_id:a.data.author_id.toString()})}catch(a){console.error("Error fetching book data:",a)}});const b=async()=>{try{const a={...t.value,author_id:parseInt(t.value.author_id,10)};(await u.put(d,a)).status===200&&(alert("Book updated successfully!"),c.push("/admin/books"))}catch(a){console.error("Error updating book:",a),alert("Failed to update book.")}},v=async()=>{if(confirm("Are you sure you want to delete this book?"))try{(await u.delete(d)).status===200&&(alert("Book deleted successfully!"),c.push("/admin/books"))}catch(e){console.error("Error deleting book:",e),alert("Failed to delete book.")}};return(a,e)=>(g(),B("div",w,[D,o("form",{onSubmit:I(b,["prevent"])},[o("div",S,[E,n(o("input",{type:"text",id:"title","onUpdate:modelValue":e[0]||(e[0]=s=>t.value.title=s),class:"form-control",required:""},null,512),[[l,t.value.title]])]),o("div",V,[q,n(o("input",{type:"text",id:"author","onUpdate:modelValue":e[1]||(e[1]=s=>t.value.author=s),class:"form-control",required:""},null,512),[[l,t.value.author]])]),o("div",R,[M,n(o("input",{type:"text",id:"publicationYear","onUpdate:modelValue":e[2]||(e[2]=s=>t.value.publication_year=s),class:"form-control",required:""},null,512),[[l,t.value.publication_year]])]),o("div",N,[T,n(o("input",{type:"text",id:"coverImage","onUpdate:modelValue":e[3]||(e[3]=s=>t.value.cover_image=s),class:"form-control",required:""},null,512),[[l,t.value.cover_image]])]),j,o("button",{type:"button",onClick:v,class:"btn btn-danger"},"Delete Book")],40,A)]))}},P=f(C,[["__scopeId","data-v-0aab58d1"]]);export{P as default};
