import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit {

    solarItems = [
        {title: 'Prime Mover', type: 'success', content: 'Solar energy has powered the entire Earth for billions of years. Without the sun, the Earth would be a giant iceball.'},
        {title: 'Self Resilience', type: 'success', content: 'Solar is one of the few energies the average person can produce at their own home. Furthermore, it creates electricity - the kind of energy all of our favorite devices expect.'},
        {title: 'Money Maker', type: 'success', content: `While there's an upfront cost, the sun and every energy "re-fill" is absolutely free. Eventually your solar panels will start paying you as a net financial gain.`},
        {title: 'Zero Emissions', type: 'success', content: 'Just look at the other side to see why we may not want to emit anything into our atmosphere.'},
        {title: 'Fixed Energy Cost', type: 'success', content: 'Avoid the slavery and instability of utility provider prices.'},
        {title: 'Producer', type: 'success', content: 'Consumption is the norm for most people, but it feels great to actually produce something. In most cases, excess energy from your panels is fed back into the grid to be consumed by others.'},
        {title: 'Storage', type: 'warning', content: 'While solar energy is reliable and abundant, storing it (for night time and overcast use) is still a challenge. However, the more companies that focus on this issue, the more progress we see.'},
        {title: 'Plentiful', type: 'success', content: ''},
    ];

    oilItems = [
        {title: 'Energy Density', type: 'success', content: 'No one can deny the energy density in oil.'},
        {title: 'Easy Trading', type: 'success', content: 'Because oil is currently our main energy source, it is widely used, therefore widely traded.'},
        {title: 'Processing', type: 'warning', content: ''},
        {title: 'Requires Energy to Get Energy', type: 'warning', content: ''},
        {title: 'Transportation/Spills', type: 'danger', content: ''},
        {title: 'Limited/Unsustainable', type: 'warning', content: ''},
    ];

    ngOnInit() {
        this.sortItems();
    }

    sortItems() {
        
    }

}
