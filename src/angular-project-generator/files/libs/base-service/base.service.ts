import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export abstract class BaseFirebaseService<T> {
  protected path: string = '';

  public constructor(path: string, protected readonly firestore: AngularFirestore) {
    this.path = path;
  }

  public get collection(): any {
    return this.firestore.collection(this.path);
  }

  public getData(): Observable<T[]> {
    return this.collection.valueChanges({ idField: 'id' }).pipe(
      map((item) => (<unknown>item) as T[]),
      take(1)
    );
  }

  public get(id: string): Observable<T> {
    return this.collection
      .doc(id)
      .valueChanges({ idField: 'id' })
      .pipe(
        map((item) => (<unknown>item) as T),
        take(1)
      );
  }

  public add(data: T): any {
    return this.collection.add({ ...data });
  }

  public update(data: T): any {
    return this.collection.doc((<any>data).id).update(JSON.parse(JSON.stringify(data)));
  }

  public delete(id: string): void {
    return this.collection.doc(id).delete();
  }
}
