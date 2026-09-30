# Fio & Cuidado — Conheça seu cabelo. Cuide dos seus fios.

Aplicativo web interativo, moderno e responsivo, desenvolvido com foco na experiência em dispositivos móveis e preparado para publicação estática direta no **GitHub Pages**.

---

## 📁 Estrutura do Projeto

```text
Fio-e-Cuidado/
│
├── .nojekyll        # Desativa o processador Jekyll no GitHub Pages
├── index.html       # Página principal e estrutura semântica
├── style.css        # Folha de estilos responsiva (Mobile-First)
├── script.js        # Lógica interativa 100% client-side (sem backend)
│
└── assets/
    ├── images/      # Ilustrações dos tipos de cabelo em SVG
    │   ├── hair-liso.svg
    │   ├── hair-ondulado.svg
    │   ├── hair-cacheado.svg
    │   ├── hair-crespo.svg
    │   ├── hair-quimica.svg
    │   └── hero-hair.svg
    └── icons/       # Favicon e logotipo em SVG
        ├── favicon.svg
        └── logo.svg
```

---

## 🚀 Como Publicar no GitHub Pages

Siga estes 4 passos simples para publicar o seu aplicativo gratuitamente:

### Passo 1: Criar um Repositório no GitHub
1. Acesse sua conta no [GitHub](https://github.com/) e clique no botão **New** (Novo repositório).
2. Dê um nome ao repositório (por exemplo: `fio-e-cuidado`).
3. Mantenha o repositório como **Público** (Public) e clique em **Create repository**.

### Passo 2: Enviar os Arquivos do Projeto
Você pode subir os arquivos pelo terminal ou diretamente pelo navegador no site do GitHub:
* Clique em **Upload an existing file** (Enviar arquivos existentes).
* Arraste a pasta `assets` e os arquivos `index.html`, `style.css` e `script.js`.
* Clique em **Commit changes** para salvar.

*(Ou via terminal Git)*:
```bash
git init
git add .
git commit -m "Publicação inicial do Fio & Cuidado"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/fio-e-cuidado.git
git push -u origin main
```

### Passo 3: Ativar o GitHub Pages
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações) no topo.
2. No menu lateral esquerdo, clique em **Pages**.
3. Em **Build and deployment** > **Branch**:
   * Selecione a branch `main`.
   * Selecione a pasta `/ (root)`.
4. Clique no botão **Save**.

### Passo 4: Acessar pelo Celular ou Computador
Em cerca de 1 a 2 minutos, o GitHub exibirá o endereço público do seu aplicativo:
```text
https://SEU-USUARIO.github.io/fioss/
```
Basta abrir esse link no navegador do seu smartphone, tablet ou computador para usufruir de todas as funcionalidades!

---

## ✨ Recursos & Funcionalidades

* **100% Client-Side:** Não requer banco de dados, Node.js ou servidor backend para execução.
* **Mobile-First & Touch-Friendly:** Botões confortáveis para o toque (mínimo de 48px de altura), menu hambúrguer responsivo e navegação fluida.
* **Zero Rolagem Horizontal:** Layout rigorosamente adaptado para larguras de 320px até computadores de alta resolução.
* **Quiz Capilar Interativo:** Gera diagnósticos e sugestões de rotina capilar na própria tela sem recarregar a página.
* **Acessibilidade & Inclusão:** Rótulos semânticos, atributos `alt` em imagens, foco visível para teclado e suporte a `prefers-reduced-motion`.
