import { Component, OnInit, Input } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ISensor } from "src/models/monitor.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhotoService } from 'src/service/photo.service';

@Component({
  selector: "app-modal2",
  templateUrl: "./modal2.component.html",
  styleUrls: ["./modal2.component.scss"]
})
export class Modal2Component implements OnInit {
  @Input() sensor: ISensor;
  public slideOneForm: FormGroup;
  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private photoService: PhotoService
  ) {
    this.slideOneForm = formBuilder.group({
      firstName: [""],
      lastName: [""],
      age: [""]
    });
  }



  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }
}