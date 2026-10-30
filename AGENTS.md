<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the game in public/game.html, embedded by the index route, to preserve the existing standalone canvas experience.
- Import game character assets through the index route and pass their resolved URLs to the iframe, so Vite serves bundled images correctly.
- Sharing must use the app root URL, not the iframe URL; use supported social share URLs and the device share sheet for other apps.
