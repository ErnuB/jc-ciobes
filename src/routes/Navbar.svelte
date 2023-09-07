<script>
    import { onMount } from 'svelte';

    let seccion = [
        {id:'entradas', nombre:"Entradas"},
        {id:'mar', nombre:"Del mar"}, 
        {id:'carnes', nombre:"Carnes"},
        {id:'ensaladas', nombre:"Ensaladas"},
        {id:'sopas', nombre:"Sopas"},
        {id:'especiales', nombre:"Especiales"},
        {id:'sandwiches', nombre:"Sandwiches"},
        {id:'desayunos', nombre:"Desayunos"},
        {id:'desayunos-especiales', nombre:"Desayunos Especiales"},
        {id:'tradicionales', nombre:"Guisados Tradicionales"},
        {id:'combinaciones', nombre:"Combinaciones"},
        {id:'natural', nombre:"Naturales"},
        {id:'bebidas', nombre:"Bebidas"},
        {id:'cocteles', nombre:"Cocteles"},
        {id:'cerveza', nombre:"Cerveza"},
    ];

    let isNavOpen = false;

    let toggleNav = () => {
    isNavOpen = !isNavOpen;
    updateAriaExpanded();
  };

  const closeNav = () => {
    isNavOpen = false;
    updateAriaExpanded();
  };

  const updateAriaExpanded = () => {
    const navBar = document.getElementById('nav-bar');
    if (navBar) {
      navBar.setAttribute('aria-expanded', isNavOpen.toString());
    }
  };

  onMount(() => {
    updateAriaExpanded();
  });
</script>

<style>
.sombra {
    text-shadow: 1px 1px 2px rgba(25, 25, 25, .5);
  }
</style>

<section class="sticky top-0 flex flex-col bg-inherit z-30 shadow-[4px_4px_10px_4px_#101010]">
    <div class="flex items-center justify-center bg-ciobes">
        <div class="m-4 grow">
            <a href="/">
                <img src="img/JCClogo2.png" alt="JC - Ciobes" class="max-h-12">
            </a>
        </div>
        <button class="p-6" aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><i class="fa-solid text-xl text-letras fa-bars"></i></button>
    </div>
{#if isNavOpen}
    <nav id="nav-bar" class="flex flex-col items-center justify-center bg-base-back ">
        {#each seccion as seccionItem}
        <div class="relative my-1">
            <a href="#{seccionItem.id}" class="m-1 text-white sombra relative text-2xl z-30" on:click={closeNav}>{seccionItem.nombre}</a>
        </div>
        {/each}
    </nav>
{/if}
</section>
