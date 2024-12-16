import { Injectable, resource } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DessertsService {
  getDesserts() {
    return resource({
      loader: async () => {
        const res = await fetch('/data.json');
        console.log(res)
        return await res.json();
      },
    });
  }
}
