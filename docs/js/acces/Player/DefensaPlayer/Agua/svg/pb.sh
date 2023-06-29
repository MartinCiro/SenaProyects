#!/bin/bash

# Start the SVG file
echo "<svg xmlns='http://www.w3.org/2000/svg' width='1800' height='300'>" > output.svg

# Group images
echo "<g>" >> output.svg
echo "  <image xlink:href='a.svg' x='0' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='b.svg' x='200' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='c.svg' x='400' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='d.svg' x='600' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='e.svg' x='800' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='f.svg' x='1000' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='g.svg' x='1200' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='h.svg' x='1400' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='i.svg' x='1600' y='0' width='200' height='300' />" >> output.svg
echo "  <image xlink:href='j.svg' x='1800' y='0' width='200' height='300' />" >> output.svg
echo "</g>" >> output.svg

# Close the SVG file
echo "</svg>" >> output.svg
