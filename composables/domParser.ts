import DOMParser from 'universal-dom-parser';

export default class DomParser {
  private static addClass(arr: HTMLElement[], className: string) {
    arr.forEach(value => {
      if (value.innerHTML === '&nbsp;') {
        value.remove();
      }
      value.classList.add(className);
    });
  }

  public static parse(str: string) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(`${str}`, 'text/html');

    const tags = {
      p: {
        name: ['text__p'],
      },
      h2: {
        name: ['heading--h2', 'heading'],
      },
      ul: {
        name: ['text__list'],
      },
      ol: {
        name: ['text__list'],
      },
      li: {
        name: ['text__list-item']
      }
    };

    Object.entries(tags).forEach(([key, value]) => {
      const queryArray = doc.documentElement.querySelectorAll(key);
      value.name.forEach(name => this.addClass(queryArray, name));
    });

    return doc.documentElement.outerHTML;
  }
}
