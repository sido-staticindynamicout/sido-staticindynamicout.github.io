# Static In, Dynamic Out (SIDO)

Project page for **"Static In, Dynamic Out: Counterfactual Action Augmentation for Moving Object Manipulation."**

SIDO trains a manipulation policy on **static-object demonstrations only**, then augments them with
counterfactual object displacements so the policy can grasp **moving** objects at deployment — pairing
plug-and-play with any swappable object-pose predictor, with no moving-object data and no retraining.

> 🔒 This paper is **under double-blind review**. The page is intentionally anonymized: no authors,
> institution, or venue, and Paper / Code / arXiv links are placeholders marked **(TBD)**.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

- `index.html` — all page content.
- `static/css/index.css` — classic Academic Project Page Template styling (Nerfies look).
- `static/images/` — figures (PNG), posters, favicon, social preview.
- `static/videos/` — teaser + rollout clips (web-encoded H.264 mp4).

## Credits

Built with the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template),
adopted from [Nerfies](https://nerfies.github.io). Licensed under
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
