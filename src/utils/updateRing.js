import { select, easeCubic } from "d3";

export function updateRing(continent, year, data, max, strokeWidth, radius, start, end) {

    var innerGap = 5;
    var barWidth = 20;

    var initialPoint = strokeWidth + ((((radius * 2) - (strokeWidth * 2)) - ((barWidth * 3) + (innerGap * 2))) / 2); 

    var fill = [["gold", "G"], ["silver", "S"], ["bronze", "B"]]

    fill.forEach((medal, i) => {
        let rotationPoint = initialPoint + ((barWidth + innerGap) * i) + (barWidth / 2) 
        let x = initialPoint + ((barWidth + innerGap) * i);
        let y = radius - 5
        let height = 5 + Math.round((data["males"][medal[1]] / max) * ((radius - 35) - 5))
        let width = barWidth

        select(`path.${medal[0]}-bar.${continent}-${year}.male`)
            .attr("transform", `rotate(180, ${rotationPoint}, ${radius - 3.5})`)
            .attr('d', rect(x, y, barWidth / 2, 0, barWidth / 4))
            .transition()
            .ease(easeCubic)
            .duration(2000)
            // .on("start", start)
            // .on("end", end)
            .attr('d', rect(x, y, barWidth / 2, height, barWidth / 4));

        select(`text.${medal[0]}-bar-text.${continent}-${year}.male`)
            .attr('x', x + (width / 2))
            .attr('y', y - height - 6)
            .text(`${data["males"][medal[1]]}`);

        height = 5 + Math.round((data["females"][medal[1]] / max) * ((radius - 35) - 5))
        x = initialPoint + ((barWidth + innerGap) * i);
        y = radius + 1.5;

        select(`path.${medal[0]}-bar.${continent}-${year}.female`)
            .attr('d', rect(x, y, barWidth / 2, 0, barWidth / 4))
            .transition()
            .ease(easeCubic)
            .duration(2000)
            // .on("start", start)
            // .on("end", end)
            .attr('d', rect(x, y, barWidth / 2, height, barWidth / 4));

        select(`text.${medal[0]}-bar-text.${continent}-${year}.female`)
            .attr('x', x + width / 2)
            .attr('y', y + height + 18)
            .text(`${data["females"][medal[1]]}`);
    });
}

function rect(x, y, width, height, curve) {
    const path = `M${x},${y}
                  v${height}
                  q0,${curve} ${curve},${curve}
                  h${width}
                  q${curve},0 ${curve},-${curve}
                  v-${height}
                  z`
     return path
}
