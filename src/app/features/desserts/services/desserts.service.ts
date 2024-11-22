import { Injectable, resource } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DessertsService {
  getDesserts() {
    return resource({
      loader: async () => {
        const res = await fetch('http://localhost:3000/desserts');
        return await res.json();
      },
    });
  }
}
