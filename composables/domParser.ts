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

    const p_array = doc.documentElement.querySelectorAll('p');
    const h2_array = doc.documentElement.querySelectorAll('h2');
    const ul_array = doc.documentElement.querySelectorAll('ul');
    const ol_array = doc.documentElement.querySelectorAll('ol');
    const li_array = doc.documentElement.querySelectorAll('li');

    this.addClass(p_array, 'text__p');
    this.addClass(h2_array, 'heading--h2');
    this.addClass(h2_array, 'heading');
    this.addClass(ul_array, 'text__list');
    this.addClass(ol_array, 'text__list');
    this.addClass(li_array, 'text__list-item');

    return doc.documentElement.outerHTML;
  }
}
