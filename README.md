- [Dev Environment Authorization issue with multiple roles](#dev-environment-authorization)

**Краткое описание решения**
В этом проекте реализован компонент фильтрации вакансий на React + TypeScript с использованием Vite и styled-components.

* **Моковые данные** хранятся в `data/jobs.json` (5 записей с полями id, title, salary, location, experience).
* **Компонент** `JobFilter` (в `src/components/JobFilter/JobFilter.tsx`):

  * Загружает список вакансий из JSON.
  * Хук `useState` хранит текущий фильтр («Любой», «1–3 года», «3–5 лет», «5+ лет»).
  * Хук `useEffect` обновляет отображаемый массив вакансий при смене фильтра.

* **Стили** (`JobFilter.styles.ts`):

* **Краткое описание решения**
В этом проекте реализован компонент фильтрации вакансий на React + TypeScript с использованием Vite и styled-components.

* **Моковые данные** хранятся в `data/jobs.json` (5 записей с полями id, title, salary, location, experience).
* **Компонент** `JobFilter` (в `src/components/JobFilter/JobFilter.tsx`):

  * Загружает список вакансий из JSON.
  * Хук `useState` хранит текущий фильтр («Любой», «1–3 года», «3–5 лет», «5+ лет»).
  * Хук `useEffect` обновляет отображаемый массив вакансий при смене фильтра.

* **Стили** (`JobFilter.styles.ts`):

  * Градиентный фон, адаптивная верстка через медиа-запросы.
  * Плавная анимация появления карточек (`keyframes fadeIn`).
  * Модульная организация: обёртка (`Wrapper`), строка фильтра, выпадающий список, список и карточки вакансий.

* **Адаптивность и UX**:

  * `clamp()` для заголовков 
  * Медиазапросы для всех основных элементов.
  * Лёгкие тени и hover-эффекты на карточках и селекте.

**Запуск проекта**

```bash
npm install  
npm run dev   
```

## Dev Environment Authorization issue with multiple roles

#### Problem
In our dev environment, logging in with test credentials sometimes fails in a given browser, showing an “Incorrect credentials” error, even though the same credentials work elsewhere.

> **Error**  
> Incorrect credentials. Make sure that the login and the password are entered correctly and try again.

#### Workarounds
1. **Switch browsers**  
   If you see the error in your current browser, try opening the app in a different one (e.g. if it fails in Chrome, switch to Firefox, and vice versa).  
2. **Use a private/incognito window**  
   This isolates cookies and session data so you don’t have to switch browsers.  
3. **Create separate browser profiles**  
   Set up one profile per test user to keep sessions completely separate.  
4. **Clear site data**  
   In Chrome DevTools → Application → Clear storage → Clear site data.  
5. **(Optional) Enable third-party cookies**  
   If your auth service runs on a different domain, allowing these cookies can prevent login failures.
